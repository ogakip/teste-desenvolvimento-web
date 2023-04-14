import { Request, Response } from 'express';
import { Pokemons } from '../entities/pokemon.entities';
import { editPokemonService } from '../services/editPokemon';

export const editPokemonController = async (req: Request, res: Response) => {
	const resultService = await editPokemonService(req.body.data);

	return res.status(200).json({
		status: 200,
		message: 'Editado com sucesso',
	});
};
