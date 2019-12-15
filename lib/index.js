const fs = require("fs");

function mdLinks(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8',(err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)/gm;
        let item;
        const arr = [];
        while ((item = regex.exec(data)) !== null) {
          arr.push({
            text: item[1],
            href: item[2]
          });
        }
        resolve(arr);
      }
    });
  });
}

module.exports = mdLinks;