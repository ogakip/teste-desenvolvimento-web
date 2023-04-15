import { object, number, string, array } from 'yup';

export const pokemonsValidationSchema = object({
	pokemons: array(
		object({
			name: string()
				.required('O nome é obrigatório')
				.typeError('O nome do pokemon deve ser uma string'),
			pokedexNumber: number()
				.required('O número da Pokédex é obrigatório')
				.typeError('O número da pokedex deve ser um número'),
			imgName: number()
				.required('O nome da imagem é obrigatório')
				.typeError('O nome da imagem deve ser um número'),
			generation: number()
				.required('A geração é obrigatória')
				.typeError('A geração deve ser um número'),
			evolutionStage: number()
				.required('O estágio de evolução é obrigatório')
				.typeError('O estágio de evolução deve ser um número'),
			evolved: number()
				.required('O número de evoluções é obrigatório')
				.typeError('Evoluído deve ser um número'),
			familyID: number()
				.required('O ID da família é obrigatório')
				.typeError('O ID da família do pokemon deve ser um número'),
			crossGen: number()
				.required('O cross-gen é obrigatório')
				.typeError('O cross-gen deve ser um número'),
			typeOne: string()
				.required('O primeiro tipo é obrigatório')
				.typeError('O primeiro tipo deve ser uma string'),
			typeTwo: string().typeError('O segundo tipo deve ser uma string'),
			weatherOne: string()
				.required('O primeiro clima é obrigatório')
				.typeError('O primeiro clima deve ser uma string'),
			weatherTwo: string().typeError('O segundo clima deve ser uma string'),
			statTotal: number()
				.required('O total de stats é obrigatório')
				.typeError('O status total deve ser um número'),
			atk: number()
				.required('O ataque é obrigatório')
				.typeError('O status de ataque deve ser um número'),
			def: number()
				.required('A defesa é obrigatória')
				.typeError('O status de defesa deve ser um número'),
			sta: number()
				.required('O stamina é obrigatório')
				.typeError('O status de stamina deve ser um número'),
			legendary: number()
				.required('A raridade é obrigatória')
				.typeError('A raridade deve ser um número'),
			aquireable: number()
				.required('A possibilidade de adquirir é obrigatória')
				.typeError('A possibilidade de adquirirdeve ser um número'),
			spawns: number()
				.required('Os spawns são obrigatórios')
				.typeError('A quantidade de spawns deve ser um número'),
			regional: number()
				.required('A região é obrigatória')
				.typeError('A região deve ser um número'),
			raidable: number()
				.required('A possibilidade de raids é obrigatória')
				.typeError('A possibilidade de raids deve ser um número'),
			hatchable: number()
				.required('A possibilidade de chocar é obrigatória')
				.typeError('A possibilidade de chocar deve ser um número'),
			shiny: number()
				.required('A possibilidade de shiny é obrigatória')
				.typeError('A possiblidade de shiny deve ser um número'),
			nest: number()
				.required('A possibilidade de ninho é obrigatória')
				.typeError('A possobilidade de ninho deve ser um número'),
			new: number()
				.required('A novidade é obrigatória')
				.typeError('A novidade deve ser um número'),
			notGettable: number()
				.required('A possibilidade de captura é obrigatória')
				.typeError('A possibilidade de captura deve ser um número'),
			futureEvolve: number()
				.required('A possibilidade de evolução futura é obrigatória')
				.typeError('A possibilidade de evolução deve ser um número'),
			maxCp40: number()
				.required('O CP máximo para o nível 40 é obrigatório')
				.typeError('O CP máximo deve ser um número'),
			maxCp39: number()
				.required('O CP máximo para o nível 39 é obrigatório')
				.typeError('O CP máximo deve ser um número'),
		}).noUnknown()
	),
})
	.noUnknown()
	.strict();

export const pokemonsIdValidationSchema = object({
	ids: array().of(
		string()
			.required(`É necessário os ID's dos pokemons para exclusão`)
			.typeError('O ID deve ser uma string')
	),
})
	.noUnknown()
	.strict();

export const pokemonsOptionalValidationSchema = object({
	data: array(
		object({
			id: string().required('O ID do pokemon é obrigatório'),
			name: string().optional().typeError('O nome do pokemon deve ser uma string'),
			pokedexNumber: number()
				.optional()
				.typeError('O número da pokedex deve ser um número'),
			imgName: number()
				.optional()
				.typeError('O nome da imagem deve ser um número'),
			generation: number().optional().typeError('A geração deve ser um número'),
			evolutionStage: number()
				.optional()
				.typeError('O estágio de evolução deve ser um número'),
			evolved: number().optional().typeError('Evoluído deve ser um número'),
			familyID: number()
				.optional()
				.typeError('O ID da família do pokemon deve ser um número'),
			crossGen: number().optional().typeError('O cross-gen deve ser um número'),
			typeOne: string()
				.optional()
				.typeError('O primeiro tipo deve ser uma string'),
			typeTwo: string().typeError('O segundo tipo deve ser uma string'),
			weatherOne: string()
				.optional()
				.typeError('O primeiro clima deve ser uma string'),
			weatherTwo: string().typeError('O segundo clima deve ser uma string'),
			statTotal: number()
				.optional()
				.typeError('O status total deve ser um número'),
			atk: number().optional().typeError('O status de ataque deve ser um número'),
			def: number().optional().typeError('O status de defesa deve ser um número'),
			sta: number().optional().typeError('O status de stamina deve ser um número'),
			legendary: number().optional().typeError('A raridade deve ser um número'),
			aquireable: number()
				.optional()
				.typeError('A possibilidade de adquirirdeve ser um número'),
			spawns: number()
				.optional()
				.typeError('A quantidade de spawns deve ser um número'),
			regional: number().optional().typeError('A região deve ser um número'),
			raidable: number()
				.optional()
				.typeError('A possibilidade de raids deve ser um número'),
			hatchable: number()
				.optional()
				.typeError('A possibilidade de chocar deve ser um número'),
			shiny: number()
				.optional()
				.typeError('A possiblidade de shiny deve ser um número'),
			nest: number()
				.optional()
				.typeError('A possobilidade de ninho deve ser um número'),
			new: number().optional().typeError('A novidade deve ser um número'),
			notGettable: number()
				.optional()
				.typeError('A possibilidade de captura deve ser um número'),
			futureEvolve: number()
				.optional()
				.typeError('A possibilidade de evolução deve ser um número'),
			maxCp40: number().optional().typeError('O CP máximo deve ser um número'),
			maxCp39: number().optional().typeError('O CP máximo deve ser um número'),
		}).noUnknown()
	),
})
	.noUnknown()
	.strict();
