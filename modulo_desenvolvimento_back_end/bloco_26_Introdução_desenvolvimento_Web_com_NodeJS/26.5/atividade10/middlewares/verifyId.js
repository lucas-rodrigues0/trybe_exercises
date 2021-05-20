const recipes = require('../dbRecipes');

module.exports = (req, res, next) => {
  const { id } = req.params;

  if (!recipes.some(rec => rec.id === id)) {
    return res.status(404).json({ menssage: 'recipe not found' });
  };

  next();
};
