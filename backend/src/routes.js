const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

// POST = SESSIONS (CREATE)
routes.post('/sessions', SessionController.create);

// GET = ONGS (INDEX)
routes.get('/ongs', OngController.index);

// POST = ONGS (CREATE)
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.create);

// GET = PROFILE (INDEX)
routes.get("/profile", ProfileController.index)

// GET = INCIDENTS (INDEX)
routes.get('/incidents', IncidentController.index);

// POST = INCIDENTS (CREATE)
routes.post('/incidents', IncidentController.create);

// DELETE = INCIDENTS (DELETE)
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentController.delete);

module.exports = routes;