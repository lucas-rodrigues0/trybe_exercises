const getRepos = require('./getRepos').getRepos;

describe('Test to verify if there is a repo', () => {

  it('should check if there is a repo with their name', () => {
    return getRepos('https://api.github.com/users/tryber/repos').then((result) => {
      expect(result).toContain('Curso-Trybe');
      expect(result).toContain('hacka-trybe');
    });
  });  
});