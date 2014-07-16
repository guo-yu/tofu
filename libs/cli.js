var FM = require('./fm');
var commands = require('./commands');

module.exports = cli;

function cli() {
  var fm = new FM();
  var command = process.argv[2];
  if (!command) return fm.init(commands.ready);
  if (command === 'help') return commands.help();
  return commands.config(fm, process.argv);
}
