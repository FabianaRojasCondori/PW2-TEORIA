const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./imdb.db'); 

app.use(cors());
app.use(express.static(__dirname)); 

app.get('/peliculas', (req, res) => {
  db.all('SELECT * FROM Movie', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(4444, () => {
  console.log('Servidor corriendo en http://localhost:4444');
});