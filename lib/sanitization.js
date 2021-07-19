function sanitize(arr) {
    let output = [];

      if (Array.isArray(arr)) {
        output = arr.map((e) => {return sanitizeSpaces(e)});
        output = output.map( (e) => {return sanitizeSymbols(e)});
      }
    
    return output;
    }


function sanitizeSpaces(str) {
  let spaceRegex = / +/g;
  let underscoreRegex = /_/g;
  let newStr = str;

  newStr = newStr.replace(underscoreRegex, ' ');
  newStr = newStr.replace(spaceRegex, ' ');

  return newStr;
}

function sanitizeSymbols(str) {
  let sanitizeRegex = /[^A-Za-z ]/g;
  let newStr = str;

  newStr = newStr.replace(sanitizeRegex, '');

  return newStr;
}


module.exports = { sanitize };
