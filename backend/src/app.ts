import express from 'express';
import 'express-async-errors';
import cors from 'cors';

export const app = express();
app.use(express.json());
app.use(cors());
