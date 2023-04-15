import { appDataSource } from '../data-source';
import { Pokemons } from '../entities/pokemon.entities';
import { ILike } from 'typeorm';

export const readPokemonsService = async (search: string | undefined) => {
	const getPokemonRepo = appDataSource.getRepository(Pokemons);
	let listPokemons = [];
	if (search) {
		listPokemons = await getPokemonRepo.find({
			where: {
				name: ILike(`%${search}%`),
			},
		});
	} else {
		listPokemons = await getPokemonRepo.find();
	}
	return listPokemons;
};
