const exemploModel = require('../models/exemploModel');

exports.formView = (req,res,erros) => {
    console.log('formController formView')
    // res.send(`
    //  <form action="/form" method="POST">
    //     <label>Teste: </label>
    //     <input name='teste' type="text">
    //     <input type="submit" value="enviar">
    //  </form>
    // `
    // )

    res.render('formulario',{erros:{},preenchidos:{}})
}

exports.formPost = (req,res,erros) => {
    console.log('formController formPost()')
    
    // console.log(req.customErrors)      
    erros ={}
    preenchidos = req.body


    // cria um objeto com todos os erros
    if(typeof req.customErrors !== 'undefined'){
        req.customErrors.forEach( (linha) => {
            //console.log(linha)
            if (!erros.hasOwnProperty(linha.path)){
                erros[linha.path] = linha.msg
            }
        })
        console.log('Exitem erros - usuario deve corrigir')
        console.log(erros)
        res.render('formulario',{erros:erros,preenchidos:preenchidos})
    }else{
        console.log('sem erros - cadastro em banco')
        dados = exemploModel.setPessoa(preenchidos)
        res.redirect(200,"/cadastro");
    }

    
    // if(Object.keys(erros).length === 0) {
    //     // logica cadastro em banco
    //     console.log('sem erros - cadastro em banco')
    // } else{
    //     console.log('renderizando fomulario com erros')
    //     console.log(erros)
    //     res.render('formulario',{erros:erros})
    // }


    
    // console.log(req.body);

    // console.log(req.body)
    // console.log(req.body.teste)
    //console.log(erros[1])
      
    // res.send('Rota /form usando POST acessada')
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

exports.modificar = (req,res) => {
    parametro = req.params.id
    dados = exemploModel.getPessoa(parametro)
    res.render('formulario',{erros:{},preenchidos:dados})
}
