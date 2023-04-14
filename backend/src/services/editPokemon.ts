import { appDataSource } from '../data-source';
import { Pokemons } from '../entities/pokemon.entities';
import { editPokemonProps } from '../interfaces/pokemons';

export const editPokemonService = async (data: any) => {
	const pokemonRepository = appDataSource.getRepository(Pokemons);

	data.forEach(async (newData: editPokemonProps) => {
  const { id, ...newDataNoID } = newData;
		await pokemonRepository.update(id, newDataNoID);
	});

	return 'OK';
};
