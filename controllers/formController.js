exports.formView = (req,res) => {
    res.send(`
     <form action="/form" method="POST">
        <label>Teste: </label>
        <input name='teste' type="text">
        <input type="submit" value="enviar">
     </form>
    `
    );
};
