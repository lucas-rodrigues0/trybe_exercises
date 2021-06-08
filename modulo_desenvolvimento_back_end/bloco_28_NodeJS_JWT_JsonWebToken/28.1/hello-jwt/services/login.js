const validateUserPassword = (username, password) => {
  if (!username || !password) return 'Username and password is necessary!';
  if (username.length < 5) return 'Username and password must be 5 characters long!';
  if (password.length < 5) return 'Username and password must be 5 characters long!';

  return null;
};

module.exports = {
  validateUserPassword,
};
