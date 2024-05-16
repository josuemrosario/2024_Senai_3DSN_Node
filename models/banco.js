const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     database: 'nodedb',
     user:'root', 
     password: '',
     connectionLimit: 5
});

module.exports = pool


// ====================================================================
// SCRIPT PARA CRIAR O BANCO
// ====================================================================

// create database nodedb;

// use nodedb;

// CREATE TABLE teste (campo1 varchar(255))

// insert into teste(campo1) values('dbdado1');
// insert into teste(campo1) values('dbdado2');
// insert into teste(campo1) values('dbdado3');
// insert into teste(campo1) values('dbdado4');