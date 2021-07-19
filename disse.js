const fileHandler   = require('./lib/fileHandler.js');
const sanitization  = require('./lib/sanitization.js');
const common        = require('./lib/common.js');

let filepath = common.getArgument(0, process.argv);

returnSearch(filepath, e => console.log(e));

function returnSearch(filepath, callback) {
  fileHandler.fileOpen(filepath, (fileContent) => {
      let content   = fileContent;
      let inputList = common.transforToList(content);
      let searchStr = common.getSearchString(inputList);
      let matches   = common.getMatches(inputList, searchStr);
      let output    = common.getOutputFromMatches(matches);

          output    = sanitization.sanitize(output);
          output    = common.formatOutput(output);

      callback(output);
    });
}

module.exports = {returnSearch}