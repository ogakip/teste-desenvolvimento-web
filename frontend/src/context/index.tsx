import { FC, PropsWithChildren } from 'react';
import { PokeProvider } from './pokemon';
import { contextProps } from '../interfaces/context';

export const ContextProvider: FC<PropsWithChildren<contextProps>> = ({
	children,
}): JSX.Element => {
	return <PokeProvider>{children}</PokeProvider>;
};
