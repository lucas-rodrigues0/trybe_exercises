const str = require('./changeString');


describe('Test all the functions in changeString', () => {
  it('should implement a lowerCase function in the upperCase', () => {
    const upCase = jest
      .spyOn(str, "upperCase")
      .mockImplementation(str => str.toLowerCase());

      str.upperCase('LUCAS');
      expect(upCase).toHaveBeenCalledTimes(1);
      expect(upCase('LUCAS')).toBe('lucas');
      expect(upCase).toHaveBeenCalledTimes(2);
      expect(upCase).toHaveBeenLastCalledWith('LUCAS');
    

      str.upperCase.mockRestore();
      expect(str.upperCase('lucas')).toBe('LUCAS');
  });

  it('should implement a lastLetter function in the firstLetter', () => {
    let firstChar = jest
      .spyOn(str, "firstLetter")
      .mockImplementation(str => str.charAt(str.length - 1));

      firstChar('Lucas');
      expect(firstChar).toHaveBeenCalledTimes(1);
      expect(firstChar('Lucas')).toBe('s');
      expect(firstChar).toHaveBeenCalledTimes(2);
      expect(firstChar).toHaveBeenLastCalledWith('Lucas');

      firstChar.mockRestore();
      firstChar = jest.spyOn(str, "firstLetter");

      expect(firstChar('Lucas')).toBe('L');
  });

  it('should add a third parameter to the function joinStrings', () => {
    let joinStr = jest
      .spyOn(str, "joinStrings")
      .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

      joinStr('str01', 'str02', 'str03');
      expect(joinStr).toHaveBeenCalledTimes(1);
      expect(joinStr('str01', 'str02', 'str03')).toBe('str01str02str03');
      expect(joinStr).toHaveBeenCalledTimes(2);
      expect(joinStr).toHaveBeenLastCalledWith('str01', 'str02', 'str03');

      joinStr.mockRestore();
      joinStr = jest.spyOn(str, "joinStrings");

      expect(joinStr('str01', 'str02')).toBe('str01str02');
  })
});