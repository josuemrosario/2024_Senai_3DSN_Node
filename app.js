const express = require('express');

const app = express();

//configuração do ejs
var path = require('path');
app.use(express.static(path.resolve(__dirname,'public')))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname+'/views'));
app.set('validators',path.join(__dirname+'/validators'));

//configuração do bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

const routes = require('./routes');


// CONFIGURAÇÃO PARA PERMITIR ENVIO DE PARAMETROS
// NO CORPO DA REQUISIÇÃO
// app.use(express.json());
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
