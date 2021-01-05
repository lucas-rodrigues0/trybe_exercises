const encode = require('./refatoraPlaygroundFunc01').encode;
const decode = require('./refatoraPlaygroundFunc01').decode;

describe('Testa funçoes encode e decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    const others = 'bcdfghjklmnpqrstvwxyz67890';
    expect(encode(others)).toBe(others);
    expect(decode(others)).toBe(others);
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const strEncode = 'ei vai tu so!';
    const strDecode = '23 v13 t5 s4!';
    expect(encode(strEncode).length).toBe(strEncode.length);
    expect(decode(strDecode).length).toBe(strDecode.length);
  });
});