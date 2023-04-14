import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { PokeContext } from '../../context/pokemon';
import { HeaderList } from '../../components/header';

export const Home = (): JSX.Element => {
	return (
		<Styled.Wrapper>
			<HeaderList />
		</Styled.Wrapper>
	);
};
