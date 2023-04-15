import { Request, Response } from 'express';
import { readPokemonsService } from '../services/readPokemons';

export const readPokemonsController = async (req: Request, res: Response) => {
 const search = req.query.search as string | undefined;
 const resultService = await readPokemonsService(search);
 return res.status(200).json(resultService);
}