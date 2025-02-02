export interface pokemonProps {
	name: string;
	pokedexNumber: number;
	imgName: number;
	generation: number;
	evolutionStage: number;
	evolved: number;
	familyID: number;
	crossGen: number;
	typeOne: string;
	typeTwo: string;
	weatherOne: string;
	weatherTwo: string;
	statTotal: number;
	atk: number;
	def: number;
	sta: number;
	legendary: number;
	aquireable: number;
	spawns: number;
	regional: number;
	raidable: number;
	hatchable: number;
	shiny: number;
	nest: number;
	new: number;
	notGettable: number;
	futureEvolve: number;
	maxCp40: number;
	maxCp39: number;
}

export interface editPokemonProps extends Partial<pokemonProps> {
	id: string;
}

export interface createPokemonProps {
	pokemons: pokemonProps[];
}
