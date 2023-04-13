import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('pokemons')
export class Pokemons {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ length: 158 })
	name: string;

	@Column()
	pokedexNumber: number;

	@Column()
	imgName: number;

	@Column()
	generation: number;

	@Column()
	evolutionStage: number;

	@Column()
	evolved: number;

	@Column()
	familyID: number;

	@Column()
	crossGen: number;

	@Column()
	typeOne: string;

	@Column()
	typeTwo: string;

	@Column()
	weatherOne: string;

	@Column()
	weatherTwo: string;

	@Column()
	statTotal: number;

	@Column()
	atk: number;

	@Column()
	def: number;

	@Column()
	sta: number;

	@Column()
	legendary: number;

	@Column()
	aquireable: number;

	@Column()
	spawns: number;

	@Column()
	regional: number;

	@Column()
	raidable: number;

	@Column()
	hatchable: number;

	@Column()
	shiny: number;

	@Column()
	nest: number;

	@Column()
	new: number;

	@Column()
	notGettable: number;

	@Column()
	futureEvolve: number;

	@Column()
	maxCp40: number;

	@Column()
	maxCp39: number;
}
