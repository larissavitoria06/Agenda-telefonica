const express = require('express');
const routes = express.Router();

const Telefones = require('./controllers/telefonicas');


routes.get('/', (req, res) => {
    res.json({ titulo: 'Agenda de Telefones' });
});

routes.post('/telefones', Telefones.create);   
routes.get('/telefones', Telefones.read); 
routes.delete('/telefones/:telefone_id', Telefones.deletar); 
routes.put('/telefones/:telefone_id', Telefones.update);     

routes.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada.' });
});

module.exports = routes;
