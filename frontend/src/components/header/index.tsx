import React, { useContext } from 'react';
import * as Styled from './styles';
import type { Tabs, TabsProps } from 'antd';
import { Input } from 'antd';
import { PokeContext } from '../../context/pokemon';
const { Search } = Input;

export const HeaderList = (): JSX.Element => {
	const { getPokemons } = useContext(PokeContext);

	const onSearch = (value: string) => getPokemons(value);

	return (
		<Styled.Wrapper>
			<Styled.bgCharizard />
			<Styled.Content>
				<h1>Listagem de pokemons</h1>
				<Search
					placeholder='Pesquisar ex=pikachu'
					onSearch={onSearch}
					style={{ width: '100' }}
				/>
			</Styled.Content>
		</Styled.Wrapper>
	);
};
