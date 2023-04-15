import { useState } from 'react';
import { pokeCardProps } from '../../interfaces/context';
import * as Styled from './styles';
import { PokeCardDetail } from '../pokeCardDetail/intex';

export const PokeCard = ({ pokemon }: pokeCardProps): JSX.Element => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleOpenModal = () => {
		setModalIsOpen((prevState) => !prevState);
	};

	return (
		<Styled.Wrapper>
			{modalIsOpen && <PokeCardDetail setModalIsOpen={handleOpenModal} pokemon={pokemon} />}
			<span>Nome: {pokemon.name}</span>
			<span>Número na pokedex: {pokemon.pokedexNumber}</span>
			<span>ATK: {pokemon.atk}</span>
			<span>DEF: {pokemon.def}</span>
			<span>STA: {pokemon.sta}</span>
			<span>STATUS TOTAL: {pokemon.statTotal}</span>
			<button type='button' onClick={handleOpenModal}>
				Detalhes
			</button>
		</Styled.Wrapper>
	);
};
