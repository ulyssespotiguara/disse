const fileHandler   = require('./lib/fileHandler.js');
const sanitization  = require('./lib/sanitization.js');
const lib           = require('./lib/common.js');

let filepath = getArgument(0, process.argv);

fileHandler.fileOpen(filepath, (fileContent) => {
  let content   = fileContent;
  let inputList = lib.transforToList(content);
  let searchStr = lib.getSearchString(inputList);
  let matches   = lib.getMatches(inputList, searchStr);
  let output    = lib.getOutputFromMatches(matches);

      output    = sanitization.sanitize(output);
      output    = lib.formatOutput(output);

  console.log (output);
});

function getArgument(index, argList) {
  return process.argv.slice(2)[index];
}
