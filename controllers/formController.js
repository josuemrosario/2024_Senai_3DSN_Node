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
    res.send('Rota /form usando POST acessada')
}

exports.cadastro = (req,res) =>{
    //res.send('homeController, homeview()');
    console.log('homeController cadastro()')
    res.render('cadastro',)
}