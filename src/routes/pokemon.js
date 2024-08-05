import express, { Request, Response } from "express";
import * as pokemonController from "../controllers/user";

const pokemonRouter = require('express')
const router = express.Router()

pokemonRouter.get('/:id', (req, res) => {
  pokemonController.getOnePokemon(req, res)
});

pokemonRouter.post('/', (req, res) => {
  pokemonController.createPokemon(req, res)
});

pokemonRouter.put('/', (req, res) => {
  pokemonController.updatePokemon(req, res)
});

pokemonRouter.delete('/:id', (req, res) => {
  pokemonController.deletePokemon(req, res)
});

export { pokemonRouter };