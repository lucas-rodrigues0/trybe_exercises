const recipes = require('../dbRecipes');

module.exports = (req, res, next) => {
  const { id } = req.params;
  const { insert } = req.body;

  if (insert) {
    const aux = recipes.find(rec => rec.id === id);
    aux.ingredientes.push(...insert);
  }

  next();
};
