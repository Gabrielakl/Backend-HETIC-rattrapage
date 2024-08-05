import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const getPokemon = async (id) => {
    try {
        const pokemon = await prisma.pokemon.findUnique({ where: { id } });
        return pokemon;
    } catch (error) {
        throw new Error(error);
    }
}

const addPokemon = async (pokemon) => {
    try {
        const newPokemon = await prisma.pokemon.create({ data: pokemon });
        return newPokemon;
    } catch (error) {
      throw new Error(error);
    }
};

const updatePokemon = async (id, pokemon) => {
    try {
        const updatedPokemon = await prisma.pokemon.update({ where: { id }, data: pokemon });
        return updatedPokemon;
    } catch (error) {
        throw new Error(error);
    }
}

const deletePokemon = async (id) => {
    try {
        const deletedPokemon = await prisma.pokemon.delete({ where: { id } });
        return deletedPokemon;
    } catch (error) {
        throw new Error(error);
    }
}

export default {
    getPokemon,
    addPokemon,
    updatePokemon,
    deletePokemon
}