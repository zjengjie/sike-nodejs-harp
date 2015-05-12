module.exports = makeJade;
var jade = require('jade');
function makeJade(root) {
	return jade.renderFile(root,{});
}
