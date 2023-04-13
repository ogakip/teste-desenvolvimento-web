import { appDataSource } from '../data-source';
import { AppError } from '../errors/appError';
import { Pokemons } from '../entities/pokemon.entities';
import { pokemonProps } from '../interfaces/pokemons';

export const createPokemonService = async (
	data: pokemonProps | pokemonProps[]
) => {
	const getPokemonRepo = appDataSource.getRepository(Pokemons);
	if (Array.isArray(data)) {
		data.forEach(async (pokemon) => {
			await getPokemonRepo.save(pokemon);
		});
	} else {
		await getPokemonRepo.save(data);
	}

 return 'OK'
};
