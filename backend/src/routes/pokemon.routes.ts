import { Router } from 'express';

import { schemaValidation } from '../middlewares/handleValidate';
import { createPokemonController } from '../controllers/createPokemon';

import { pokemonsValidationSchema } from '../validations/pokemon';

export const PokemonRouter = Router();
PokemonRouter.post(
	'/create',
	schemaValidation(pokemonsValidationSchema),
	createPokemonController
);
