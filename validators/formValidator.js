const formController = require('../controllers/formController');

const { body, validationResult } = require('express-validator');

exports.validacoes = [
    body('cpnome', 'Necessario digitar nome').not().isEmpty(),
    body('cpnome','nome precisa ter no minimo 6 caracteres').isLength({min:6}),
    body('cptelefone', 'Necessario digitar Telefone').not().isEmpty(),
    body('cpEndereco', 'Necessario digitar Endereço').not().isEmpty(),
    body('cpEmail', 'Necessario digitar o Email').not().isEmpty(),
    body('cpCPF', 'Necessario digitar o CPF').not().isEmpty(),
    body('cpRG', 'Necessario digitar o RG').not().isEmpty(),
];


exports.retornoValidacoes = (req, res, next) => {
    console.log('retornoValidacoes()')
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //return res.status(400).json({ errors: errors.array() });
        req.customErrors = errors.array();
    }
   next();
};

