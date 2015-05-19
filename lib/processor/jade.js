module.exports = makeJade;
var jade = require('jade'),
	connect = require('connect'),
	path = require('path'),
	serveStatic = require('serve-static'),
	fs = require('fs');
function makeJade(root) {
	var app = connect();
	app.use(serveStatic(root));
	app.use(function(req, res, next){
		if (path.extname(req.url)!='.html') {
			next();
		} else {
			var jadeFile = root + path.dirname(req.url)
						+ '/'+path.basename(req.url,'.html')
						+ '.jade';
			fs.readFile(jadeFile,{encoding: "utf8"},function(err,data){
				if (err) {
					res.statusCode = 404;
					res.end();
				} else {
					var html = jade.render(data);
					res.setHeader('Content-Length', html.length);	
					res.setHeader('Content-Type', 'text/html; charset=UTF-8');
					res.end(jade.render(data));
				}
			})
		}
		
	});
	return app;
}
