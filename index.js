var connect = require('connect');
var serveStatic = require('serve-static');
module.exports = function(root) {
	root = root ? root : process.cwd();
	var app = connect();
	app.use(serveStatic(root));
	return app;
}
