const express = require('express');
const cors = require('cors');
const produtoRoutes = require('./ProdutoRoutes');

const app = express();
const port = 3000;

app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json()); // Substitui o body-parser

app.use(produtoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
