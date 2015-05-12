var connect = require('connect');
var serveStatic = require('serve-static');
module.exports = function(root) {
	root = root ? root : process.cwd();
	return connect()
		.use(serveStatic(root));
}
