import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { PokeContext } from '../../context/pokemon';
import { HeaderList } from '../../components/header';
import { ListPokemons } from '../../components/listPokemons';
import { PokeCardDetail } from '../../components/pokeCardDetail/intex';

export const Home = (): JSX.Element => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const emptyPokemon: any = {
		name: 'Nenhum',
		pokedexNumber: 0,
		imgName: 0,
		generation: 0,
		evolutionStage: 0,
		familyID: 0,
		typeOne: 'Nenhum',
		typeTwo: 'Nenhum',
		weatherOne: 'Nenhum',
		weatherTwo: 'Nenhum',
		atk: 0,
		def: 0,
		sta: 0,
		statTotal: 0,
		spawns: 0,
		maxCp39: 0,
		maxCp40: 0,
		evolved: 0,
		crossGen: 0,
		legendary: 0,
		aquireable: 0,
		regional: 0,
		raidable: 0,
		shiny: 0,
		nest: 0,
		new: 0,
		notGettable: 0,
		futureEvolve: 0,
		hatchable: 0,
	};

	const handleOpenModal = () => {
		setModalIsOpen((prevState) => !prevState);
	};

	return (
		<Styled.Wrapper>
			{modalIsOpen && (
				<PokeCardDetail setModalIsOpen={handleOpenModal} pokemon={emptyPokemon} />
			)}
			<HeaderList handleOpenModal={handleOpenModal} />
			<ListPokemons />
		</Styled.Wrapper>
	);
};
