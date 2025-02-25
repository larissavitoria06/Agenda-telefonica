const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',    
    user: 'root',  
    password: '',       
    database: 'agenda',   
    waitForConnections: true,
    connectionLimit: 10,   
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
    connection.release(); 
});

module.exports = pool;
