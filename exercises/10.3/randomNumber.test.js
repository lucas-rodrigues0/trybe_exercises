const func = require('./randomNumber');

describe('Test the randomNumber function', () => {
  it('should test the function with a mock function', () => {
    func.randomNumber = jest.fn().mockReturnValue(10);

    expect(func.randomNumber).toHaveBeenCalledTimes(0);

    func.randomNumber();
    expect(func.randomNumber).toHaveBeenCalled();
    
    expect(func.randomNumber).toHaveBeenCalledTimes(1);
    expect(func.randomNumber()).toBe(10);
    expect(func.randomNumber).toHaveBeenCalledTimes(2);
  })
});