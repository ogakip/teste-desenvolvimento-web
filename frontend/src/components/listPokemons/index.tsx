import React, { useContext, useState } from 'react';
import * as Styled from './styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabPanel } from '../tabPanel';
import { PokeContext } from '../../context/pokemon';
import { PokeCard } from '../pokeCard';

export const ListPokemons = (): JSX.Element => {
	const [value, setValue] = useState(0);

	const { pokemonList } = useContext(PokeContext);

	const a11yProps = (index: number) => {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	};

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Styled.Wrapper>
			<Styled.ListHeader>
				<Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
					<Tab label='Pokemons registrados' {...a11yProps(0)} />
				</Tabs>
			</Styled.ListHeader>
			<Styled.ListBody>
				<div>
					{pokemonList.length &&
						pokemonList.map((pokemon) => (
							<PokeCard key={pokemon.id} pokemon={pokemon} />
						))}
				</div>
			</Styled.ListBody>
		</Styled.Wrapper>
	);
};
