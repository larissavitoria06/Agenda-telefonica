CREATE DATABASE agenda;
USE agenda;

CREATE TABLE telefones (
    telefone_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(20) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    obs VARCHAR(255)
);

INSERT INTO telefones (telefone, nome, obs) VALUES
('199877665544', 'Lari de Tecnologia', 'Lutecia Agrícola'),
('199899225514', 'Piracanjubinha Motorista', 'Dona Ana da Cantina'),
('199877115500', 'Vitória Intercambista da Vizinha', 'Jertrudes Mãe');


CREATE TABLE consultas (
    consulta_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    telefone_id INTEGER,
    data_consulta DATETIME,
    descricao TEXT,
    FOREIGN KEY (telefone_id) REFERENCES telefones(telefone_id)
);

SELECT * FROM telefones;
SELECT * FROM consultas;




















