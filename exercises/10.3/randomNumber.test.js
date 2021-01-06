const func = require('./randomNumber');
jest.mock("./randomNumber");

describe('Test the randomNumber function', () => {
  it('should test the function with a mock function', () => {
    func.randomNumber.mockReturnValue(10);

    expect(func.randomNumber).toHaveBeenCalledTimes(0);

    func.randomNumber();
    expect(func.randomNumber).toHaveBeenCalled();

    expect(func.randomNumber).toHaveBeenCalledTimes(1);
    expect(func.randomNumber()).toBe(10);
    expect(func.randomNumber).toHaveBeenCalledTimes(2);
  });

  it('should test the function with a mock implementation', () => {
    func.randomNumber.mockImplementation((a, b) => a / b);
    func.randomNumber(10, 2);

    expect(func.randomNumber).toHaveBeenCalled();
    expect(func.randomNumber).toHaveBeenCalledTimes(3);
    expect(func.randomNumber).toHaveBeenCalledWith(10, 2);
    expect(func.randomNumber(10, 2)).toBe(5);
  })
});