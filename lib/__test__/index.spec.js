const mdLinks = require('../index.js');

const test = [
{"link": "https://pt.wikipedia.org/wiki/Markdown","title": "Markdown"},
{"link": "https://nodejs.org/","title": "Node.js"},
{"link": "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
"title": "md-links"},
{"link": "https://nodejs.org/pt-br/","title": "Node.js"},
{"link": "https://developers.google.com/v8/","title": "Chrome"}
]

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  })
  it('should return links and titles', (done) => {
    mdLinks('./lib/__test__/teste.md').then(result => {
      expect(result).toEqual(test);
      done()
    });
  })
  it('should return an Error', (done) =>{
    mdLinks('./lib/__test__/teste.txt').catch(result => {
      expect(result).toEqual("An error found: Error: ENOENT: no such file or directory, open './lib/__test__/teste.txt'");
      done()
    });
  })
})