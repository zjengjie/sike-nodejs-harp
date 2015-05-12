#!/usr/bin/env node
var miniharp = require('../')
,args = require('minimist')(process.argv.slice(2))
,app = miniharp(args._[0])
,port = args.port

port = port ? port : 4000;

console.log("Starting mini-harp on http://localhost:"+port);
app.listen(port);
