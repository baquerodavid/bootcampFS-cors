const express = require('express');
const app = express();
const routes = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.redirect('/characters'));
app.use('/characters', routes)
app.use("/:name", routes);

app.use((req, res) =>
  res.status(404).json({ mensaje: '404 - La página no existe' })
);

app.listen(3000, () => {
    console.log('Express está escuchando en el puerto 3000');
});


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/roickandmortyRoutes");
const PORT = 3000;

app.use(cors());
app.use("/characters", routes);

app.listen(PORT, () =>
  console.log(
    `El servidor está escuchando en el puerto http://localhost:${PORT}`
  )
); 
*/