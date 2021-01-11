const dog = require('./dogPictureAPI');


describe('test the request from an API', () => {

  it('should test if the Promise resolves', async () => {
    dog.requestPicture = jest.fn().mockResolvedValue('request sucess');

    await dog.requestPicture();
    expect(dog.requestPicture).toHaveBeenCalled();
    expect(dog.requestPicture).toHaveBeenCalledTimes(1);
    expect(dog.requestPicture()).resolves.toBe('request sucess');
    expect(dog.requestPicture).toHaveBeenCalledTimes(2);
  });
  it('should test if the Promise rejects', async () => {
    dog.requestPicture = jest.fn().mockRejectedValue('request invalid');

    expect(dog.requestPicture).toHaveBeenCalledTimes(0);
    expect(dog.requestPicture()).rejects.toMatch('request invalid');
    expect(dog.requestPicture).toHaveBeenCalledTimes(1);
  })
});
