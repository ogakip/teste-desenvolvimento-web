import {
	createContext,
	useState,
	PropsWithChildren,
	FC,
	useEffect,
} from 'react';
import {
	contextProps,
	pokeContextProps,
	createPokemonProps,
	pokeIdsProps,
	editPokeProps,
	desktopDataProps,
	pokemonProps,
} from '../../interfaces/context';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

const initialValues = {
	getPokemons: () => '',
	createPokemmons: () => '',
	deletePokemons: () => '',
	editPokemons: () => '',
	addToDesktop: () => '',
	changeMode: () => '',
	pokemonList: [],
	pokemonCount: 0,
};

export const PokeContext = createContext<pokeContextProps>(initialValues);

export const PokeProvider: FC<PropsWithChildren<contextProps>> = ({
	children,
}): JSX.Element => {
	const allowedModes = ['create', 'edit', 'delete'];
	const [pokemonCount, setPokemonCount] = useState<number>(0);
	const [pokemonList, setPokemonList] = useState([]);
	const [selectedCreateData, setSelectedCreateData] = useState<pokemonProps[]>(
		[]
	);
	const [selectedEditData, setSelectedEditData] = useState<desktopDataProps[]>(
		[]
	);
	const [selectedDeleteData, setSelectedDeleteData] = useState<
		desktopDataProps[]
	>([]);
	const [currentMode, setCurrentMode] = useState('edit');

	const getPokemons = async (search?: string | undefined) => {
		if (!search) {
			await api
				.get('/get')
				.then((res) => setPokemonList(res.data))
				.catch((err) => console.log(err));
		} else {
			await api
				.get(`/get?search=${search}`)
				.then((res) => {
					setPokemonList(res.data);
					console.log(res.data);
				})
				.catch((err) => console.error(err));
		}
	};

	const createPokemmons = async (data: createPokemonProps) => {
		await api
			.post('/create', data)
			.then((res) => {
				toast.success(res.data.message);
				getPokemons();
			})
			.catch((err) => console.error(err));
	};

	const deletePokemons = async (data: pokeIdsProps) => {
		await api
			.delete('/delete', { data })
			.then((res) => toast.success('Deletado com sucesso'))
			.catch((err) => console.error(err));
		getPokemons();
	};

	const editPokemons = async (data: editPokeProps) => {
		await api
			.patch('/update', data)
			.then((res) => toast.success(res.data.message))
			.catch((err) => console.error(err));
		getPokemons();
	};

	const addToDesktop = (data: desktopDataProps) => {
		if (currentMode === 'create') {
			toast.error(
				'Pokemon já registrado, para adicionar, entre no modo de edição ou deleção'
			);
		} else if (currentMode === 'edit' && data.id) {
			const alreadySelected = selectedEditData.find(
				(selected) => selected.id === data.id
			);
			if (alreadySelected) {
				toast.error(
					'Pokemon já adicionado na área de trabalho de edição, por favor selecione outro pokemon'
				);
			} else {
				setSelectedEditData((prevState) => [...prevState, data]);
				toast.success('Pokemon adicionado a area de trabalho de edição');
			}
		} else if (currentMode === 'delete') {
			const alreadySelected = selectedDeleteData.find(
				(selected) => selected.id === data.id
			);

			if (alreadySelected) {
				toast.error(
					'Pokemon já adicionado na área de trabalho de deleção, por favor selecione outro pokemon'
				);
			} else {
				setSelectedDeleteData((prevState) => [...prevState, data]);
				toast.success('Pokemon adicionado a area de trabalho de deleção');
			}
		}
	};

	const changeMode = (newMode: string) => {
		if (allowedModes.includes(newMode) && currentMode !== newMode) {
			setCurrentMode(newMode);
			toast.success(
				`Modo alterado para ${
					newMode === 'create'
						? 'criação'
						: newMode === 'edit'
						? 'edição'
						: 'deleção'
				}`
			);
		} else {
			toast.error('Modo não autorizado');
		}
	};

	useEffect(() => {
		if (pokemonList && pokemonList.length) {
			setPokemonCount(pokemonList.length);
		}
	}, [pokemonList]);

	return (
		<PokeContext.Provider
			value={{
				getPokemons,
				createPokemmons,
				deletePokemons,
				editPokemons,
				addToDesktop,
				changeMode,
				pokemonList,
				pokemonCount,
			}}
		>
			{children}
		</PokeContext.Provider>
	);
};
