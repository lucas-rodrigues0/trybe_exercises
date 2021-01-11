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
    expect(func.randomNumber).toHaveBeenCalledTimes(4);
  });

  it('should test the function with another two mocks implementation', () => {
    func.randomNumber.mockImplementationOnce((a, b, c) => a * b * c);
    expect(func.randomNumber(2, 5, 10)).toBe(100);
    expect(func.randomNumber).toHaveBeenCalled();
    expect(func.randomNumber).toHaveBeenCalledTimes(5);
    expect(func.randomNumber).toHaveBeenCalledWith(2, 5, 10);

    func.randomNumber.mockImplementationOnce(a => a * 2);
    expect(func.randomNumber(10)).toBe(20);
    expect(func.randomNumber).toHaveBeenCalled();
    expect(func.randomNumber).toHaveBeenCalledTimes(6);
    expect(func.randomNumber).toHaveBeenCalledWith(10);
  });
});