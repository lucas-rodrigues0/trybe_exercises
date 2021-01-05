const uppercase = require('./uppercase');

describe('test with callbacks', () => {
  const strTest = 'lucas rodrigues';
  it('should wait for the callback', done => {
    uppercase(strTest, (result) => {
      expect(result).toBe('LUCAS RODRIGUES');
      done();
    });
  });
});