var expect = require('chai').expect;
var arrayMods = require('../arrayMods');

describe('arrayMods.js', function() {
  it('will say true when passed [1, 2, 2, 3]', function() {
    expect(arrayMods.arrDup([1, 2, 2, 3])).to.eql(true);
  });
  it('will say [1, 2, 3 , 4] when passed [1, 2, 2, 3, 4]', function() {
    expect(arrayMods.unique([1, 2, 2, 3, 4])).to.eql([1, 2, 3, 4]);
  });
  it('will say ["foo", "bar"] when passed ["foo"], "bar"', function() {
    expect(arrayMods.pushTo(['foo'], 'bar')).to.eql(['foo', 'bar']);
  });
  it('will say ["foo"] when passed ["foo", "bar"]', function() {
    expect(arrayMods.popFrom(['foo', 'bar'])).to.eql(['foo']);
  });
  it('will say ["foo", "bar"] when passed ["foobar", "foo", "bar"]', function() {
    expect(arrayMods.shiftFrom(['foobar', 'foo', 'bar'])).to.eql(['foo', 'bar']);
  });
  it('will say ["foobar", "foo", "bar"] when passed ["foo", "bar"], "foobar"', function() {
    expect(arrayMods.unshiftTo(['foo', 'bar'], 'foobar')).to.eql(['foobar', 'foo', 'bar']);
  });
  it('will say "d" when passed ["azr", "bc", "dddd"]', function() {
    expect(arrayMods.frequency2(['azr', 'bc', 'dddd'])).to.eql(['d']);
  })
});
