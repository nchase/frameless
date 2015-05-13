var fs = require('fs');
module.exports = [
  fs.readFileSync('./node_modules/me/src/index.md'),
  '<iframe src="//localhost:3002"></iframe>'
];
