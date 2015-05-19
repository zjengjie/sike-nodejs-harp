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
					res.end(jade.render(data));
				}
			})
		}
		
	});
	return app;
}
