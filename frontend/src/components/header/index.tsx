import React, { useContext, useState, useEffect } from 'react';
import * as Styled from './styles';
import { Input } from 'antd';
import { PokeContext } from '../../context/pokemon';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { PokeCardDetail } from '../pokeCardDetail/intex';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { pokemonProps } from '../../interfaces/context';

export interface HeaderProps {
	handleOpenModal: () => void;
}

function formatPokemonProps(pokemon: any): pokemonProps {
	return {
		name: pokemon['Name'],
		pokedexNumber: parseFloat(pokemon['Pokedex Number']) || 1,
		imgName: parseFloat(pokemon['Img name']) || 1,
		generation: parseFloat(pokemon['Generation']) || 1,
		evolutionStage: parseFloat(pokemon['Evolution Stage']) || 1,
		evolved: parseFloat(pokemon['Evolved']) || 1,
		familyID: parseFloat(pokemon['FamilyID']) || 1,
		crossGen: parseFloat(pokemon['Cross Gen']) || 1,
		typeOne: pokemon['Type 1'],
		typeTwo: pokemon['Type 2'] || '',
		weatherOne: pokemon['Weather 1'],
		weatherTwo: pokemon['Weather 2'] || '',
		statTotal: parseFloat(pokemon['STAT TOTAL']) || 1,
		atk: parseFloat(pokemon['ATK']) || 1,
		def: parseFloat(pokemon['DEF']) || 1,
		sta: parseFloat(pokemon['STA']) || 1,
		legendary: parseFloat(pokemon['Legendary']) || 1,
		aquireable: parseFloat(pokemon['Aquireable']) || 1,
		spawns: parseFloat(pokemon['Spawns']) || 1,
		regional: parseFloat(pokemon['Regional']) || 1,
		raidable: parseFloat(pokemon['Raidable']) || 1,
		hatchable: parseFloat(pokemon['Hatchable']) || 1,
		shiny: parseFloat(pokemon['Shiny']) || 1,
		nest: parseFloat(pokemon['Nest']) || 1,
		new: parseFloat(pokemon['New']) || 1,
		notGettable: parseFloat(pokemon['Not-Gettable']) || 1,
		futureEvolve: parseFloat(pokemon['Future Evolve']) || 1,
		maxCp40: parseFloat(pokemon['100% CP @ 40']) || 1,
		maxCp39: parseFloat(pokemon['100% CP @ 39']) || 1,
	};
}

export const HeaderList = ({ handleOpenModal }: HeaderProps): JSX.Element => {
	const { getPokemons, createPokemmons, pokemonCount } = useContext(PokeContext);
	const [search, setSearch] = useState('');
	const [mode, setMode] = useState('create');
	const [data, setData] = useState([]);

	function splitArray(array: any[], size: number): any[][] {
		const result = [];
		for (let i = 0; i < array.length; i += size) {
			result.push(array.slice(i, i + size));
		}
		return result;
	}

	const handleExcelUpload = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const file = event.target.files && event.target.files[0];

		if (!file) {
			return;
		}

		const reader = new FileReader();

		reader.onload = (event) => {
			const data = event.target?.result;
			const workbook = XLSX.read(data, { type: 'binary' });

			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];

			const pokemonData = XLSX.utils.sheet_to_json(worksheet) as pokemonProps[];
			const formattedPokemonData = pokemonData.map((pokemon) =>
				formatPokemonProps(pokemon)
			);
			const split = splitArray(formattedPokemonData, 100);
			split.forEach((part) => {
				createPokemmons({
					pokemons: part,
				});
			});
		};

		reader.readAsBinaryString(file);
	};

	useEffect(() => {
		getPokemons(search);
	}, [search]);

	return (
		<Styled.Wrapper>
			<Styled.bgCharizard />
			<Styled.Content>
				<h1>Listagem de pokemons - Contagem de pokemóns {pokemonCount}</h1>
				<TextField
					className='input-mui'
					id='outlined-basic'
					label='Pesquisar ex=pikachu'
					variant='outlined'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button onClick={() => handleOpenModal()}>Adicionar</button>
				<button>
					<input
						className='file-input'
						id='excel-upload'
						type='file'
						accept='.xls, .xlsx'
						onChange={handleExcelUpload}
					/>
				</button>
			</Styled.Content>
		</Styled.Wrapper>
	);
};
