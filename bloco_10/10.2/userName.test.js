const getUserName = require('./userName');

describe('Test result from promise', () => {
  it('should resolve if found the user id', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toEqual('Mark');
  })
  it('should reject if the user is not found', () => {
    expect.assertions(1);
    return expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.' });
  })
});

describe('Test result from async', () => {
  it('should resolve if found the user id', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toEqual('Mark');
  });
  it('should reject if the user is not found', async () => {
    expect.assertions(1);
    await expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.' });
  });
});
