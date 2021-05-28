const express = require('express');
const ProductModel = require('../models/productModelMySQL');

const router = express.Router();

router.get('/list-products', async (_req, res, _next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/list-products-by-id/:id', async (req, res, _next) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);

  if (!product) return res.status(404).json({ error: { code: "404", message: "Product not found" } });

  res.status(200).json(product);
});

router.post('/add-products', async (req, res, _next) => {
  const { name, brand } = req.body;
  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json({ message: "Successfully added!", description: newProduct });
});

router.delete('/delete-products/:id', async (req, res, _next) => {
  const { id } = req.params;
  const response = await ProductModel.exclude(id);

  if (!response) return res.status(404).json({ error: { code: "404", message: "Unable to delete. Product not found" } });

  res.status(200).json({ message: "Successfully deleted!"});
});

router.put('/update-products/:id', async (req, res, _next) => {
  const { id } = req.params;
  const { name, brand } = req.body;
  const response = await ProductModel.update(id, name, brand);

  if (!response) return res.status(404).json({ error: { code: "404", message: "Unable to update. Product not found!" } });

  res.status(200).json({ message: "Successfully updated!"});
});

module.exports = router;
