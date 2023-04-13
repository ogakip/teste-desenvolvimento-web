import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { PokemonRouter } from './routes/pokemon.routes';
import { handleAppError } from "./middlewares/handleError"

export const app = express();
app.use(express.json());
app.use(cors());
app.use("/pokemon", PokemonRouter)
app.use(handleAppError)
