const exemploModel = require('../models/exemploModel');

exports.formView = (req,res) => {
    
    // res.send(`
    //  <form action="/form" method="POST">
    //     <label>Teste: </label>
    //     <input name='teste' type="text">
    //     <input type="submit" value="enviar">
    //  </form>
    // `
    // )

    res.render('formulario')
}

exports.formPost = (req,res) => {
    console.log('funcao formPost')
    console.log(req.body)
    console.log(req.body.teste)
      
    res.send('Rota /form usando POST acessada')
}

exports.cadastro = (req,res) =>{
    //res.send('formController, homeview()');
    console.log('formController cadastro()')
    
    // dados = ['dado1','dado2','dado3','dado4']
    // exemploModel.setDados('testedb')
    dados = exemploModel.getDados()
    
    pessoa = {
        nome: 'josue micaroni',
        idade: '45'
    }

    res.render('cadastro',dados)
}


