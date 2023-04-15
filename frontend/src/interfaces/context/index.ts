import { ReactNode } from 'react';

export interface contextProps {
	children: ReactNode;
}

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

export interface createPokemonProps {
	pokemons: pokemonProps[];
}

export interface pokeIdsProps {
	ids: string[];
}

export interface optionalPokeProps extends Partial<pokemonProps> {
	id: string;
}

export interface desktopDataProps extends Partial<optionalPokeProps> {}

export interface editPokeProps {
	data: optionalPokeProps[];
}

export interface pokemonPropsWithID extends pokemonProps {
	id: string;
}

export interface pokeCardProps {
	pokemon: pokemonPropsWithID;
}

export interface pokeCardPropsDetail extends pokeCardProps {
	setModalIsOpen: () => void;
}

export interface pokeContextProps {
	getPokemons: (search: string) => void;
	createPokemmons: (data: createPokemonProps) => void;
	deletePokemons: (data: pokeIdsProps) => void;
	editPokemons: (data: editPokeProps) => void;
	addToDesktop: (data: desktopDataProps) => void;
	changeMode: (newMode: string) => void;
	pokemonList: pokemonPropsWithID[];
	pokemonCount: number;
}
