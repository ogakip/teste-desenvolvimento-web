import { Router } from 'express';

import { schemaValidation } from '../middlewares/handleValidate';
import { createPokemonController } from '../controllers/createPokemon';

import { pokemonValidationSchema } from '../validations/pokemon';

export const PokemonRouter = Router();
PokemonRouter.post(
	'/create',
	schemaValidation(pokemonValidationSchema),
	createPokemonController
);
