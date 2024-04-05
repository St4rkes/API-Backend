const express = require('express');
const ProdutoController = require('./ProdutoController');

const router = express.Router();

router.get('/produtos', ProdutoController.findAll);
router.post('/produtos', ProdutoController.create);

module.exports = router;
