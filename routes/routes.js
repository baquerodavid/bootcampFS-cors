const express = require('express');
const route = express.Router();
const axios = require('axios');
const cors = require('cors');

route.use(cors());

route.get('/characters', async (req, res) => {
  const url = "https://rickandmortyapi.com/api/character";

  try {
    const response = await axios.get(url);
    const data = response.data.results

    res.json({ data });
  } catch (ERROR) {
    res.status(404).json({error: 'Los datos no están disponibles'})
  }
})

route.get("/characters/:name", async (req, res) => {
  const characterName = req.params.name;
  const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

  try {
    const response = await axios.get(url);
    const [{ name, status, species, gender, origin, image }] = response.data.results;

    res.json([{ name, status, species, gender, origin, image }]);
  } catch (ERROR) {
    res.status(404).json({ error: "Personaje no encontrado" });
  }
});

module.exports = route;