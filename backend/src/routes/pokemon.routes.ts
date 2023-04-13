import { Router } from 'express';

import { schemaValidation } from '../middlewares/handleValidate';
import { createPokemonController } from '../controllers/createPokemon';
import { readPokemonsController } from '../controllers/readPokemons';

import { pokemonsValidationSchema } from '../validations/pokemon';

export const PokemonRouter = Router();
PokemonRouter.get('/get', readPokemonsController);
PokemonRouter.post(
	'/create',
	schemaValidation(pokemonsValidationSchema),
	createPokemonController
);
