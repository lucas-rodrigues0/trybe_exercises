const { expect } = require('chai');
const fs = require('fs/promises');
const sinon = require('sinon');

const typeOfNumber = require('./typeOfNumber');
const writeNewFile = require('./writeNewFile');

const POSITIVO = 'positivo';
const NEGATIVO = 'negativo';
const NEUTRO = 'neutro';
const NOTNUMBER = 'o valor deve ser um número';

describe('typeOfNumber.js', () => {
  describe('O tipo da resposta é ', () => {
    const resultado = typeOfNumber(1);

    it('uma string', () => {
      expect(resultado).to.be.a('string');
    });
  });

  describe('Quando o número for maior que zero', () => {
    const resultado = typeOfNumber(2);

    it('a resposta é - positivo', () => {
      expect(resultado).to.be.equals(POSITIVO);
    });
  });

  describe('Quando o número for menor que zero', () => {
    const resultado = typeOfNumber(-1);

    it('a resposta é - negativo', () => {
      expect(resultado).to.be.equals(NEGATIVO);
    });
  });

  describe('Quando o número for igual que zero', () => {
    const resultado = typeOfNumber(0);

    it('a resposta é - neutro', () => {
      expect(resultado).to.be.equals(NEUTRO);
    });
  });

  describe('Quando não for um número passado', () => {
    const resultado = typeOfNumber('0');

    it('a resposta é - o valor deve ser um número', () => {
      expect(resultado).to.be.equals(NOTNUMBER);
    });
  });
});

describe('writeNewFile.js', () => {
  describe('ao concluir o arquivo', () => {
    before(() => {
        sinon.stub(fs, 'writeFile').resolves('ok');
    });

    after(() => {
        fs.writeFile.restore();
    });


    it('a resposta é - ok', async () => {
      const resultado = await writeNewFile('fileName', '// test content');

      expect(resultado).to.be.equals('ok');
    });
  });

  describe('ao não concluir o arquivo', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').rejects('não foi possível concluir');
    });

    after(() => {
        fs.writeFile.restore();
    });


    it('a resposta é - não foi possível concluir', async () => {
      const resultado = await writeNewFile(null, '// test content');

      expect(resultado).to.be.equals('não foi possível concluir');
    });
  });
});
