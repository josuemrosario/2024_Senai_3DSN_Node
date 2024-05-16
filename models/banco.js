const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     database: 'nodedb',
     user:'root', 
     password: '',
     connectionLimit: 5
});

module.exports = pool

