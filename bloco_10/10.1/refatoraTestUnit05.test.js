const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
  it('compara obj1 e obj2', () => {
    expect(obj1).toMatchObject(obj2);
  });
  it('compara obj1 e obj3', () => {
    expect(obj1).not.toMatchObject(obj3);
  });
  it('compara obj2 e obj3', () => {
    expect(obj2).not.toMatchObject(obj3);
  });
});