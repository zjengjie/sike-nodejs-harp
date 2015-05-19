module.exports = makeLess;
var less = require('less'),
	connect = require('connect'),
	path = require('path'),
	serveStatic = require('serve-static'),
	fs = require('fs');
function makeLess(root) {
	var app = connect();
	app.use(serveStatic(root));
	app.use(function(req, res, next){
		if (path.extname(req.url)!='.css') {
			next();
		} else {
			var lessFile = root + path.dirname(req.url)
						+ '/'+path.basename(req.url,'.css')
						+ '.less';
			fs.readFile(lessFile,{encoding: "utf8"},function(err,data){
				if (err) {
					res.statusCode = 404;
					res.end();
				} else {
					less.render(data, function(e,output){
						res.end(output.css);
					});
				}
			})
		}
	});
	return app;
}