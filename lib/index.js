const fs = require("fs");

function mdLinks(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)/gm;
        let m;
        const arr = [];
        const file = data.toString();
        while ((m = regex.exec(file)) !== null) {
          arr.push({
            text: m[1],
            href: m[2]
          });
        }
        resolve(arr);
      }
    });
  });
}

module.exports = mdLinks;