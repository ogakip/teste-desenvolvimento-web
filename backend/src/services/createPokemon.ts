import { appDataSource } from '../data-source';
import { AppError } from '../errors/appError';
import { Pokemons } from '../entities/pokemon.entities';
import { createPokemonProps } from '../interfaces/pokemons';

export const createPokemonService = async (data: createPokemonProps) => {
	const getPokemonRepo = appDataSource.getRepository(Pokemons);
	await getPokemonRepo.save(data.pokemons);
	return 'OK';
};
