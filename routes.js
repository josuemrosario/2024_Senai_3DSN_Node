const express = require('express');
const route = express.Router();
const formController = require('./controllers/formController');

// ROTAS DA APLICAÇÃO (INICIO)



route.get('/',(req, res) => {
    res.send('Chegamos ate aqui com nodemon parabéns');
})

route.get('/rota2',(req, res) => {
    res.send('rota2');
})

route.get('/form',formController.formView)

route.post('/form',(req, res) => {
    console.log(req.body)
    res.send('rota /form usando POST acessada com sucesso');
})

route.get('/comparametros/:nome?/:sobrenome?',(req, res) => {
    res.send('rota com parametros');
    console.log(req.params);
})

route.get('/comquery',(req, res) => {
    console.log(req.query)
    res.send(req.params);
})

// ROTAS DA APLICAÇÃO (FIM)

module.exports = route