const express = require('express');
const route = express.Router();
const axios = require('axios');
const cors = require('cors');

route.use(cors());

route.get('/', async (req, res) => {
  const url = "https://rickandmortyapi.com/api/character";

  try {
    const response = await axios.get(url);
    const data = response.data.results

    res.json({ data });
  } catch (ERROR) {
    res.status(404).json({error: 'Los datos no están disponibles'})
  }
})

route.get("/:name", async (req, res) => {
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


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
const express = require("express");
const route = express.Router();
const fetchCharacters = require("../utils/fetchCharacters");

route.get("/", async (req, res) => {
  const data = await fetchCharacters();
  res.json(data);
});

route.get("/:name", async (req, res) => {
  const name = req.params.name;
  const data = await fetchCharacters(name);
  res.json(data);
});

module.exports = route; 
*/