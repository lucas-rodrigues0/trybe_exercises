module.exports = (err, _req, res, _next) => {

  const statusByErrorCode = {
    notFound: 404,
    alreadyExists: 409,
  };
  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
};
