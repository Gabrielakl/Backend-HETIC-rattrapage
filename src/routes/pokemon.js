import express from "express";
import * as pokemonController from "../controllers/pokemon.js";

const pokemonRouter = express.Router()

pokemonRouter.get('/:id', (req, res) => {
  pokemonController.getOnePokemon(req, res)
});

pokemonRouter.get('/user/:id', (req, res) => {
  pokemonController.getAllPokemonsFromUser(req, res)
});

pokemonRouter.post('/', (req, res) => {
  pokemonController.createPokemon(req, res)
});

pokemonRouter.put('/:id', (req, res) => {
  pokemonController.updatePokemon(req, res)
});

pokemonRouter.delete('/:id', (req, res) => {
  pokemonController.deletePokemon(req, res)
});

export { pokemonRouter };