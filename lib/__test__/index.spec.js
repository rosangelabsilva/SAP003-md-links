const mdLinks = require("../index.js");

const test = [
  {"href": "https://pt.wikipedia.org/wiki/Markdown", "text": "Markdown"},
  {"href": "https://nodejs.org/", "text": "Node.js"},
  {"href": "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
    "text": "md-links"},
  {"href": "https://nodejs.org/pt-br/", "text": "Node.js"},
  {"href": "https://developers.google.com/v8/", "text": "Chrome"}
];

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("should return hrefs and texts", (done) => {
    mdLinks("./lib/__test__/teste.md").then(result => {
      expect(result).toEqual(test);
      done();
    });
  });
  it("should return an Error", (done) =>{
    mdLinks("./lib/__test__/teste.txt").catch(result => {
      expect(result).toEqual("Error: ENOENT: no such file or directory, open './lib/__test__/teste.txt'");
      done();
    });
  });
});