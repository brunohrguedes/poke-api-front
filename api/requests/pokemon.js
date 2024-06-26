import { api } from "../axios";

export const getPokemonData = (name) =>
  api
    .get(`/api/pokemons/${name}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
