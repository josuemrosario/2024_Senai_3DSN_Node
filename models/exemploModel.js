const db = require('../models/banco');

// let dados = ['dado1','dado2','dado3','dado4','dado5', 'dadosx']
dados = []

exports.getDados = () => {

    console.log('exemploModel getDados()')
    
    db.getConnection() // abre a conexão com o banco retorna a conexão(uma promisse)
    .then(conn => {  
       // usa a conexao para fazer uma query ( retorna como promisse)
      conn.query("select * from pessoa") 
        .then((rows) => {
          console.log(rows); 
          dados = rows
          conn.end(); // fecha a conexão com o banco
        })
        .catch(err => {
          //trata os erros da query
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      //trata os erros da conexão
    });

    return dados
}

exports.getPessoa = (id) => {
  console.log('exemploModel getPessoa()')
  db.getConnection() // abre a conexão com o banco retorna a conexão(uma promisse)
  .then(conn => {  
     // usa a conexao para fazer uma query ( retorna como promisse)
    conn.query("select * from pessoa where id="+id) 
      .then((rows) => {
        // console.log(rows); 
        dados = rows
        conn.end(); // fecha a conexão com o banco
      })
      .catch(err => {
        //trata os erros da query
        console.log(err); 
        conn.end();
      })
      
  }).catch(err => {
    //trata os erros da conexão
  });

  return dados 

}












exports.setDados = (dado) =>{
    console.log('exemploModel setDados()')
    // dados.push(dado)

    db.getConnection()
        .then(conn => { 
            conn.query("insert into teste(campo1) values(?);",
            [dado])
        })
        .catch(err => {
          //trata os erros da query
          console.log(err); 
          conn.end();
        })

    return true
}

exports.setPessoa = (dados)=> {
  console.log('exemploModel setPessoa()')
  // dados.push(dado)

  db.getConnection()
      .then(conn => { 
         
          queryInsercao = "insert into pessoa(nome,telefone,endereco,email,cpf,rg)"
          queryInsercao += "values(?,?,?,?,?,?)";
          // console.log(dados)
          conn.query(queryInsercao,[dados.cpnome,dados.cptelefone,dados.cpEndereco,dados.cpEmail,dados.cpCPF,dados.cpRG])
      })
      .catch(err => {
        //trata os erros da query
        console.log(err); 
        conn.end();
      })

  return true
}

