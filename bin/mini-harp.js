#!/usr/bin/env node
var miniharp = require('../')
,app = miniharp()
,args = require('minimist')(process.argv.slice(2))
,port = args.port
,projectroot = args._[0];

port = port ? port : 4000;

console.log("Starting mini-harp on http://localhost:"+port);
app.use(function(request, response, next) {
			if (request.url == "/current-time") {
				response.end(new Date().toISOString()+"\n");
			} else {
				response.end("Cannot Get "+request.url+"\n");
			}
		});
app.listen(port);
