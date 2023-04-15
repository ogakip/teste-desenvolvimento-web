import { appDataSource } from '../data-source';
import { Pokemons } from '../entities/pokemon.entities';

export const deletePokemonsService = async (ids: string[]) => {
	const getPokemonRepo = appDataSource.getRepository(Pokemons);
	const result = await getPokemonRepo.delete(ids);
	return result.affected ?? 0;
};
