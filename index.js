var connect = require('connect'),
	makeJade = require('./lib/processor/jade'),
	makeLess = require('./lib/processor/less'),
	path = require('path');
module.exports = function(root) {
	var app = connect();
	app.use(function(req, res, next){
		if (req.url === '/') {
			req.url = '/index.html';
		}
		next();
	});
	app.use(function (req, res, next) {
		var ext = path.extname(req.url);
		if (ext == '.jade' || ext == '.html') {
			res.statusCode = 404;
			res.end();
		}
		next();
	})
	app.use(makeJade(root));
	app.use(makeLess(root));
	return app;
}
