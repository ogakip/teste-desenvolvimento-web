import { Request, Response } from 'express';
import { createPokemonService } from '../services/createPokemon';

export const createPokemonController = async (req: Request, res: Response) => {
	const resultService = await createPokemonService(req.body);
	return res.status(201).json({
		status: 201,
		message: 'Criado com sucesso',
	});
};
