module.exports = (req, res) => {
  if (req.fileValidationError) {
    return res.status(403).json({ error: { message: req.fileValidationError } });
  }
  res.status(200).json({ body: req.body, file: req.file });
};
