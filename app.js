const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Chegamos ate aqui com nodemon parabéns');
})

app.get('/rota2',(req, res) => {
    res.send('rota2');
})

app.get('/form',(req, res) => {
    res.send(`
     <form action="/form" method="POST">
        <label>Teste: </label>
        <input type="text">
        <input type="submit" value="enviar">
     </form>
    `
    );
})

app.post('/form',(req, res) => {
    res.send('rota /form usando POST acessada com sucesso');
})

app.get('/comparametros/:nome',(req, res) => {
    res.send('rota com parametros');
    console.log(req.params);
})





const porta = 3000
app.listen(porta,()=>{
    console.log('Servidor Executando')
    console.log('Porta: ',porta)
    console.log('URL: ','http://localhost:'+porta)
})
