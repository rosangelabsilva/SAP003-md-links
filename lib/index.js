const fs = require('fs');

function mdLinks(path) {
     return new Promise((resolve, reject) => {
          fs.readFile(path,(err, data) => {
               if(err){
                    reject(err)
               } else {
               const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
               let m;
               const arr = [];
               const text = data.toString();
                    while ((m = regex.exec(text)) !== null) {
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    arr.push({title: m[1], link: m[2]});
                    } 
               resolve(arr) }
          });
     });
}

module.exports = mdLinks;
