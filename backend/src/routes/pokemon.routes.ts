import { Router } from 'express';

import { schemaValidation } from '../middlewares/handleValidate';
import { createPokemonController } from '../controllers/createPokemon';
import { readPokemonsController } from '../controllers/readPokemons';
import { deletePokemonsController } from '../controllers/deletePokemons';
import { editPokemonController } from '../controllers/editPokemon';

import {
	pokemonsIdValidationSchema,
	pokemonsOptionalValidationSchema,
	pokemonsValidationSchema,
} from '../validations/pokemon';

export const PokemonRouter = Router();
PokemonRouter.get('/get', readPokemonsController);
PokemonRouter.post(
	'/create',
	schemaValidation(pokemonsValidationSchema),
	createPokemonController
);
PokemonRouter.delete(
	'/delete',
	schemaValidation(pokemonsIdValidationSchema),
	deletePokemonsController
);
PokemonRouter.patch(
	'/update',
	schemaValidation(pokemonsOptionalValidationSchema),
	editPokemonController
);
