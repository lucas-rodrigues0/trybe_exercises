const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const MoviesModel = require('../../models/movieModel');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', async () => {
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, { useNewUrlParser: true, useUnifiedTopology: true });
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });
    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.empty;
    });
  });

  describe('quando existem filmes criados', () => {
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, { useNewUrlParser: true, useUnifiedTopology: true });
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
      const moviesCollection = await connectionMock.db('model_exercise_tests').collection('movies');
      await moviesCollection.insertOne({ title: 'Example Movie', directedBy: 'Jane Dow', releaseYear: 1999, })
    });
    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});

describe('Insere um novo filme no BD', () => {
  const DBServer = new MongoMemoryServer();
  const payloadMovie = { title: 'Example Movie', directedBy: 'Jane Dow', releaseYear: 1999, };

  before(async () => {
    const URLMock = await DBServer.getUri();
    const connectionMock = await MongoClient.connect(URLMock, { useNewUrlParser: true, useUnifiedTopology: true });
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });
  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('quando é inserido com sucesso', async () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Busca detalhes de um filme especifico', async () => {

  describe('Quando o ID é encontrado no DB', async () => {
    before(async () => {
      sinon.stub(MoviesModel, 'getById').resolves([
        { _id: 1, title: 'Example Movie', directedBy: 'Jane Dow', releaseYear: 1999, }
      ])

    });
    after(async () => {
      MoviesModel.getById.restore();
    });

    it('Retorna um array', async () => {
      const response = await MoviesModel.getById(1);
      console.log(response);
      expect(response).to.be.an('array');
    });

    it('Retorna um array não vazio', async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.be.not.empty;
    });

    it('Retorna um item apenas, do tipo objeto', async () => {
      const [item] = await MoviesModel.getById(1);

      expect(item).to.be.an('object');
    });

    it('O item possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MoviesModel.getById(1);

      expect(item).to.include.all.keys('_id', 'title', 'releaseYear', 'directedBy');
    });
  });

  describe('Quando o ID não é encontrado no DB', async () => {
    before(async () => {
      sinon.stub(MoviesModel, 'getById').resolves([])

    });
    after(async () => {
      MoviesModel.getById.restore();
    });

    it('Retorna um array', async () => {
      const response = await MoviesModel.getById(2);

      expect(response).to.be.an('array');
    });

    it('O array está vazio', async () => {
      const response = await MoviesModel.getById(2);

      expect(response).to.be.empty;
    });
  });
});
