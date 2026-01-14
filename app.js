const express = require('express');
const app = express();
const routes = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.redirect('/characters'));
app.get('/characters', routes)
app.get("/characters/:name", routes);

app.use((req, res) =>
  res.status(404).json({ mensaje: '404 - La página no existe' })
);

app.listen(3000, () => {
    console.log('Express está escuchando en el puerto 3000');
});