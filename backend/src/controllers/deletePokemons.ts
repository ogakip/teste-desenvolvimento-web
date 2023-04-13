import { Request, Response } from 'express';
import { deletePokemonsService } from '../services/deletePokemons';

export const deletePokemonsController = async (req: Request, res: Response) => {
	const resulService = await deletePokemonsService(req.body.ids);
	if (resulService !== 0) {
		return res.status(204).send();
	} else {
		return res.status(400).json({
			message: 'Nenhum pokemon encontrado com o ID especificado',
			status: 400,
		});
	}
};
