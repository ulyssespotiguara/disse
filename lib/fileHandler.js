const fs = require('fs');

function fileOpen(filepath, callback){
    //let content;
    try {
        fs.stat(filepath, (error, exists) => {
            if (error) {
                throw new Error('file not found');
            }
            fs.readFile(filepath, 'utf8', (err, content) => {callback(content); });
          });
    } catch(err) {
        console.log(err.message);
    }
}

module.exports = { fileOpen };
