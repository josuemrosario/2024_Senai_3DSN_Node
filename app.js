const express = require('express');
const app = express();
const routes = require('./routes');


// CONFIGURAÇÃO PARA PERMITIR ENVIO DE PARAMETROS
// NO CORPO DA REQUISIÇÃO
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)


app.use('/', routes);

//Abre o servidor

const porta = 3000
app.listen(porta,()=>{
    console.log('Servidor Executando')
    console.log('Porta: ',porta)
    console.log('URL: ','http://localhost:'+porta)
})
