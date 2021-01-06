const getRepos = require('./getRepos').getRepos;

describe('Test to verify if there is a repo', () => {

  it('should check if there is a repo of the ToDoList project', () => {
    return getRepos('https://api.github.com/users/tryber/repos').then((result) => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });  
});