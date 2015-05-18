var connect = require('connect'),
	makeJade = require('./lib/processor/jade');
module.exports = function(root) {
	return makeJade(root);
}
