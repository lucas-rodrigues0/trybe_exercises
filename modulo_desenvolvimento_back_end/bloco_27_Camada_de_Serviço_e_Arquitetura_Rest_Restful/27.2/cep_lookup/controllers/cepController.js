const rescue = require('express-rescue');
const Joi = require('joi');

const Ceps = require('../models/cepModel');
const services = require('../services/cepServices');

const PingPong = rescue(async (_req, res, _next) => {
  res.status(200).json({ message: 'pong!' });
});

const getAll = rescue(async (_req, res, _next) => {
  const response = await Ceps.getAllCeps();

  res.status(200).json(response);
});

const getByNumber = rescue(async (req, res, _next) => {
  const cep = req.params.cep

  if (!services.validCep(cep)) return res.status(400).json({ error: { code: 'invalidData', message: 'CEP inválido' } });

  const response = await Ceps.getCepByNumber(services.formatCepNumber(cep));

  if (!response || response.erro) return res.status(404).json({ error: { code: 'notFound', message: 'CEP não encontrado' } });

  res.status(200).json(response);
})

const createNew = rescue(async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    cep: Joi.string().pattern(/\d{5}-?\d{3}/).required(),
    logradouro: Joi.string().max(50).required(),
    bairro: Joi.string().max(50).required(),
    localidade: Joi.string().max(20).required(),
    uf: Joi.string().max(2).required(),
  }).validate(req.body);
  if (error) return next(error);

  const verifyCep = await Ceps.getCepByNumber(services.formatCepNumber(cep));
  if (verifyCep) return res.status(409).json({ error: { code: 'alreadyExists', message: 'CEP já existente' } });

  const formatedCep = services.formatCep({ cep, logradouro, bairro, localidade, uf });
  const response = await Ceps.createNewCep(formatedCep);

  if (response.error) return next(response.error);

  return res.status(201).json(response);
})

module.exports = {
  PingPong,
  getAll,
  getByNumber,
  createNew,
}
