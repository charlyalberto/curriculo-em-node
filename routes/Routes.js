//Routes.js
const express = require('express');
const CurriculoController = require('../controller/Controller.js');

const router = express.Router();

router.post('/criar-tabela', CurriculoController.criarTabelaCurriculos);
router.post('/inserir', CurriculoController.inserirCurriculo);
router.get('/todos', CurriculoController.obterTodosCurriculos);
router.put('/atualizar/:id', CurriculoController.atualizarCurriculo);
router.delete('/excluir/:id', CurriculoController.excluirCurriculo);

module.exports = router;
