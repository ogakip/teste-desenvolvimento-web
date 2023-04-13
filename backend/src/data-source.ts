import { DataSource } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

const currentProcess = process.env.NODE_ENV;
const host =
	currentProcess === 'migration' ? 'localhost' : 'red_pokemon_database';

export const appDataSource = new DataSource({
	type: 'postgres',
	host,
	port: 5432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	synchronize: false,
	entities: ['src/entities/*.ts'],
	migrations: ['src/migrations/*.ts'],
});
