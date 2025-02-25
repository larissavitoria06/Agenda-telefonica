const con = require('../connect'); 

const create = (req, res) => {
    const { telefone, contato, obs } = req.body;

    con.query('INSERT INTO telefones (telefone, nome, obs) VALUES (?, ?, ?)', 
        [telefone, contato, obs], (err, result) => {
        if (err) {
            res.status(500).json({ erro: err });
        } else {
            res.status(201).json({ message: 'Contato adicionado!', id: result.insertId });
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM telefones', (err, result) => {
        if (err) {
            res.status(400).json({ erro: err });
        } else {
            res.status(200).json(result);
        }
    });
};

module.exports = { read, create };
