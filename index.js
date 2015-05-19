var connect = require('connect'),
	makeJade = require('./lib/processor/jade'),
	makeLess = require('./lib/processor/less');
module.exports = function(root) {
	var app = connect();
	app.use(function(req, res, next){
		if (req.url === '/') {
			req.url = '/index.html';
		}
		next();
	});
	app.use(makeJade(root));
	app.use(makeLess(root));
	return app;
}
