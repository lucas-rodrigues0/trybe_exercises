const myRemoveWithoutCopy = require('./refatoraTestUnit03');

describe('teste da função myRemoveWithoutCopy', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const original = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(original, 3)).toEqual(original);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const original = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(original, 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const original = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(original, 3)).toBe(original);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const original = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(original, 5)).toEqual([1, 2, 3, 4]);
  });
});