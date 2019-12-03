#! /usr/bin/env node

const mdLinks = require("./lib/index.js");

const path = process.argv[2];

mdLinks(path)
  .then((result) => {
    (console.log(result));
  })
  .catch((err) => {
    (console.log(err));
  });