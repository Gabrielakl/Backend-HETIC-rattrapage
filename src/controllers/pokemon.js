import { HTTP_STATUS_CODE } from "../utils/UHttp";
import * as pokemonRepository from "../repositories/pokemon";

const getOnePokemon = async (req, res) => {
    try {
      const pokemon = await pokemonRepository.getPokemon(req.params.id);
      res.status(HTTP_STATUS_CODE.OK).json(pokemon);
    } catch (error) {
      res.status(HTTP_STATUS_CODE.NOT_FOUND).json({ message: "User not found" });
    }
};

const createUser = async (req, res) => {
    try {
      const pokemon = await userRepository.addPokemon(req.body);
      res.status(HTTP_STATUS_CODE.CREATED).json(pokemon);
    } catch (error) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: "User not created" });
    }
};

const updateUser = async (req, res) => {
    try {
      const pokemon = await pokemonRepository.updatePokemon(req.params.id, req.body);
      res.status(HTTP_STATUS_CODE.OK).json(pokemon);
    } catch (error) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: "User not updated" });
    }
};

const deleteUser = async (req, res) => {
    try {
      await pokemonRepository.deletePokemon(req.params.id);
      res.status(HTTP_STATUS_CODE.NO_CONTENT).json();
    } catch (error) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: "User not deleted" });
    }
};

export { getOnePokemon, createPokemon, updatePokemon, deletePokemon };
  