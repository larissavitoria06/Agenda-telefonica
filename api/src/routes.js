const express = require('express');
const routes = express.Router();

const Consulta = require('./controllers/agendamentos');

routes.get('/', (req, res) => {
    res.json({ titulo: 'Agenda Telefonica Larissas'});
});

routes.post('', Consulta.create);
routes.get('/consultas', Consulta.read);

module.exports = routes;