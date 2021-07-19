function transforToList(str){
    return str.split('\n')
  }
  
function getSearchString(list) {
    return list.pop();
}
  
function getMatches(list, search) {
    let matches = list.map(
      (s) => {return s.match(search)}
    );
    matches = matches.filter(matches => matches != null);
  
    return matches;
}
  
function getOutputFromMatches(matches){
    let output = matches.map(
      (m) => {return m.input}
      );
  
    return output;
}
  
function formatOutput(output) {
    return output.map((e) => {return '['+e+']'}).toString().replace(/,/g,'\n')
}

function getArgument(index, argList) {
  return process.argv.slice(2)[index];
}

module.exports = {transforToList, getSearchString, getMatches, getOutputFromMatches, formatOutput, getArgument}
