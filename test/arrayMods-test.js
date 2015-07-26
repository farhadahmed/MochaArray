var expect = require('chai').expect;
var arrayMods = require('../arrayMods');

describe('arrayMods.js', function() {
  it('arrdup says true when passed [1, 2, 2, 3]', function() {
    expect(arrayMods.arrDup([1, 2, 2, 3])).to.eql(true);
  });
  it('arrdup says false when passed [1, 2, 3]', function() {
    expect(arrayMods.arrDup([1, 2, 3])).to.eql(false);
  });

  it('unique says [1, 2, 3 , 4] when passed [1, 2, 2, 3, 4]', function() {
    expect(arrayMods.unique([1, 2, 2, 3, 4])).to.eql([1, 2, 3, 4]);
  });
  it('push says 2 when passed ["foo"], "bar"', function() {
    expect(arrayMods.pushTo(['foo'], 'bar')).to.eql(2);
  });
  it('pop says "bar" when passed ["foo", "foobar", "bar"]', function() {
    expect(arrayMods.popFrom(['foo', 'foobar', 'bar'])).to.eql('bar');
  });
  it('shift says "foobar" when passed ["foobar", "foo", "bar"]', function() {
    expect(arrayMods.shiftFrom(['foobar', 'foo', 'bar'])).to.eql('foobar');
  });
  it('unshift says 3 when passed ["foo", "bar"], "foobar"', function() {
    expect(arrayMods.unshiftTo(['foo', 'bar'], 'foobar')).to.eql(3);
  });
  it('frequency2 says "d" when passed ["azr", "bc", "dddd"]', function() {
    expect(arrayMods.frequency2(['azr', 'bc', 'dddd'])).to.eql(['d']);
  })
});
