var arrayMods = require('../arrayMods');
var expect = require('chai').expect;

describe('arrayMods.js', function() {
  it('will say true when passed [1, 2, 2, 3]', function() {
    expect(arrayMods.arrDup([1, 2, 2, 3])).to.eql(true);
  });
  it('will say [1, 2, 3 , 4] when passed [1, 2, 2, 3, 4]', function() {
    expect(arrayMods.unique([1, 2, 2, 3, 4])).to.eql([1, 2, 3, 4]);
  });
});
