// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
const axios = require("axios");
const urlBase = "https://rickandmortyapi.com/api/character";

async function fetchCharacters(name = null) {
  try {
    const url = name ? `${urlBase}/?name=${name}` : urlBase;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return { error: `Character not found ${error}` };
  }
}

module.exports = fetchCharacters; 
*/
