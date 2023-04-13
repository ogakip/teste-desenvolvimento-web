import { object, number, string, array } from 'yup';

export const pokemonsValidationSchema = object({
	pokemons: array(
		object({
			name: string().required('O nome é obrigatório'),
			pokedexNumber: number().required('O número da Pokédex é obrigatório'),
			imgName: number().required('O nome da imagem é obrigatório'),
			generation: number().required('A geração é obrigatória'),
			evolutionStage: number().required('O estágio de evolução é obrigatório'),
			evolved: number().required('O número de evoluções é obrigatório'),
			familyID: number().required('O ID da família é obrigatório'),
			crossGen: number().required('O cross-gen é obrigatório'),
			typeOne: string().required('O primeiro tipo é obrigatório'),
			typeTwo: string(),
			weatherOne: string().required('O primeiro clima é obrigatório'),
			weatherTwo: string(),
			statTotal: number().required('O total de stats é obrigatório'),
			atk: number().required('O ataque é obrigatório'),
			def: number().required('A defesa é obrigatória'),
			sta: number().required('O stamina é obrigatório'),
			legendary: number().required('A raridade é obrigatória'),
			aquireable: number().required('A possibilidade de adquirir é obrigatória'),
			spawns: number().required('Os spawns são obrigatórios'),
			regional: number().required('A região é obrigatória'),
			raidable: number().required('A possibilidade de raids é obrigatória'),
			hatchable: number().required('A possibilidade de chocar é obrigatória'),
			shiny: number().required('A possibilidade de shiny é obrigatória'),
			nest: number().required('A possibilidade de ninho é obrigatória'),
			new: number().required('A novidade é obrigatória'),
			notGettable: number().required('A possibilidade de captura é obrigatória'),
			futureEvolve: number().required(
				'A possibilidade de evolução futura é obrigatória'
			),
			maxCp40: number().required('O CP máximo para o nível 40 é obrigatório'),
			maxCp39: number().required('O CP máximo para o nível 39 é obrigatório'),
		})
	),
});

export const pokemonsIdValidationSchema = object({
	ids: array().of(string().required(`É necessário os ID's dos pokemons para exclusão`)),
});
