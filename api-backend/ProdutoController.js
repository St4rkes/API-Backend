const db = require('./database');

const ProdutoController = {
  findAll(req, res) {
    db.all("SELECT * FROM produtos", [], (err, rows) => {
      if (err) {
        res.status(500).json({"error": err.message});
        return;
      }
      res.json({
        "message": "success",
        "data": rows
      });
    });
  },

  create(req, res) {
    const { nome, preco } = req.body;
    db.run(`INSERT INTO produtos (nome, preco) VALUES (?, ?)`, [nome, preco], function(err) {
      if (err) {
        res.status(500).json({"error": err.message});
        return;
      }
      res.json({
        "message": "success",
        "id": this.lastID
      });
    });
  },

};

module.exports = ProdutoController;
