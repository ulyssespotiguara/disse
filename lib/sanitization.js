function sanitize(arr) {
    let output = [];
    let sanitizeRegex = /[^A-Za-z ]/g;
    
      if (Array.isArray(arr)) {
        output = arr.map((e) => {return e.replace(/_/g, ' ')});
        output = output.map( (e) => {
                                      return e.replace(sanitizeRegex, '')
                                    });
      }
    
    return output;
    }

module.exports = { sanitize };
