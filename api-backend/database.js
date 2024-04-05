const sqlite3 = require('sqlite3').verbose();
const dbName = './database.db';

let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            preco REAL NOT NULL
        )`, (err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }
});

module.exports = db;
