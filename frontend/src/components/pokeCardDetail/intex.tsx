import { pokeCardPropsDetail } from '../../interfaces/context';
import * as Styled from './styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from 'react';
import { PokeContext } from '../../context/pokemon';
import { api } from '../../services/api';
import TextField from '@mui/material/TextField';

export const PokeCardDetail = ({
	pokemon,
	setModalIsOpen,
}: pokeCardPropsDetail) => {
	const { deletePokemons, editPokemons, createPokemmons } =
		useContext(PokeContext);
	const [name, setName] = useState<string>(pokemon.name);
	const [pokedexNumber, setPokedexNumber] = useState<string | number>(
		pokemon.pokedexNumber
	);
	const [imgName, setImgName] = useState<string | number>(pokemon.imgName);
	const [generation, setGeneration] = useState<string | number>(
		pokemon.generation
	);
	const [evolutionStage, setEvolutionStage] = useState<string | number>(
		pokemon.evolutionStage
	);
	const [familyID, setFamilyID] = useState<string | number>(pokemon.familyID);
	const [typeOne, setTypeOne] = useState<string>(pokemon.typeOne);
	const [typeTwo, setTypeTwo] = useState<string>(pokemon.typeTwo);
	const [weatherOne, setWeatherOne] = useState<string>(pokemon.weatherOne);
	const [weatherTwo, setWeatherTwo] = useState<string>(pokemon.weatherTwo);
	const [atk, setAtk] = useState<string | number>(pokemon.atk);
	const [def, setDef] = useState<string | number>(pokemon.def);
	const [sta, setSta] = useState<string | number>(pokemon.sta);
	const [statTotal, setStatTotal] = useState<string | number>(pokemon.statTotal);
	const [spawns, setSpawns] = useState<string | number>(pokemon.spawns);
	const [maxCp39, setMaxCp39] = useState<string | number>(pokemon.maxCp39);
	const [maxCp40, setMaxCp40] = useState<string | number>(pokemon.maxCp40);
	const [evolved, setEvolved] = useState<string | number>(pokemon.evolved);
	const [crossgen, setCrossgen] = useState<string | number>(pokemon.crossGen);
	const [legendary, setLegendary] = useState<string | number>(pokemon.legendary);
	const [aquireable, setAquireable] = useState<string | number>(
		pokemon.aquireable
	);
	const [regional, setRegional] = useState<string | number>(pokemon.regional);
	const [raidable, setRaidable] = useState<string | number>(pokemon.raidable);
	const [shiny, setShiny] = useState<string | number>(pokemon.shiny);
	const [nest, setNest] = useState<string | number>(pokemon.nest);
	const [isNew, setIsNew] = useState<string | number>(pokemon.new);
	const [notGettable, setNotGettable] = useState<string | number>(
		pokemon.notGettable
	);
	const [futureEvolve, setFutureEvolve] = useState<string | number>(
		pokemon.futureEvolve
	);
	const [hatchable, setHatchable] = useState<string | number>(
		pokemon.hatchable && 0
	);

	const handleEditOrCreatePokemon = () => {
		const data: any = {
			data: [
				{
					name,
					pokedexNumber: Number(pokedexNumber),
					imgName: Number(imgName),
					generation: Number(generation),
					evolutionStage: Number(evolutionStage),
					familyID: Number(familyID),
					typeOne,
					typeTwo,
					weatherOne,
					weatherTwo,
					atk: Number(atk),
					def: Number(def),
					sta: Number(sta),
					statTotal: Number(statTotal),
					spawns: Number(spawns),
					maxCp39: Number(maxCp39),
					maxCp40: Number(maxCp40),
					evolved: Number(evolved),
					crossGen: Number(crossgen),
					legendary: Number(legendary),
					aquireable: Number(aquireable),
					regional: Number(regional),
					raidable: Number(raidable),
					shiny: Number(shiny),
					nest: Number(nest),
					new: Number(isNew),
					notGettable: Number(notGettable),
					futureEvolve: Number(futureEvolve),
					hatchable: Number(hatchable),
				},
			],
		};
		const dataNoId: any = {
			pokemons: [
				{
					name,
					pokedexNumber: Number(pokedexNumber),
					imgName: Number(imgName),
					generation: Number(generation),
					evolutionStage: Number(evolutionStage),
					familyID: Number(familyID),
					typeOne,
					typeTwo,
					weatherOne,
					weatherTwo,
					atk: Number(atk),
					def: Number(def),
					sta: Number(sta),
					statTotal: Number(statTotal),
					spawns: Number(spawns),
					maxCp39: Number(maxCp39),
					maxCp40: Number(maxCp40),
					evolved: Number(evolved),
					crossGen: Number(crossgen),
					legendary: Number(legendary),
					aquireable: Number(aquireable),
					regional: Number(regional),
					raidable: Number(raidable),
					shiny: Number(shiny),
					nest: Number(nest),
					new: Number(isNew),
					notGettable: Number(notGettable),
					futureEvolve: Number(futureEvolve),
					hatchable: Number(hatchable),
				},
			],
		};
		if (pokemon.id) {
			data.data[0].id = pokemon.id;
			editPokemons(data);
		} else {
			createPokemmons(dataNoId);
		}
	};

	const handleDeletePokemon = () => {
		if (pokemon.id) {
			const data = {
				ids: [pokemon.id],
			};
			deletePokemons(data);
			setModalIsOpen();
		} else {
			setModalIsOpen();
		}
	};

	return (
		<Styled.Wrapper>
			<Styled.Background onClick={setModalIsOpen} />
			<Styled.Content>
				<button onClick={handleDeletePokemon}>
					{pokemon.id ? 'Deletar' : 'Cancelar'}
				</button>
				<button onClick={handleEditOrCreatePokemon}>
					{pokemon.id ? 'Editar' : 'Registrar'}
				</button>
				<Styled.InputBox>
					<TextField
						id='outlined-basic'
						label='Nome'
						variant='outlined'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Número na pokedex'
						variant='outlined'
						value={pokedexNumber}
						type='number'
						onChange={(e) => setPokedexNumber(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Nome da imagem'
						variant='outlined'
						value={imgName}
						onChange={(e) => setImgName(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Geração'
						variant='outlined'
						value={generation}
						onChange={(e) => setGeneration(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Estágio de evolução'
						variant='outlined'
						value={evolutionStage}
						onChange={(e) => setEvolutionStage(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='ID da família'
						variant='outlined'
						value={familyID}
						onChange={(e) => setFamilyID(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Tipo 1'
						variant='outlined'
						value={typeOne}
						onChange={(e) => setTypeOne(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Tipo 2'
						variant='outlined'
						value={typeTwo}
						onChange={(e) => setTypeTwo(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Clima 1'
						variant='outlined'
						value={weatherOne}
						onChange={(e) => setWeatherOne(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Clima 2'
						variant='outlined'
						value={weatherTwo}
						onChange={(e) => setWeatherTwo(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Ataque'
						variant='outlined'
						value={atk}
						onChange={(e) => setAtk(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Defesa'
						variant='outlined'
						value={def}
						onChange={(e) => setDef(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Stamina'
						variant='outlined'
						value={sta}
						onChange={(e) => setSta(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Status total'
						variant='outlined'
						value={statTotal}
						onChange={(e) => setStatTotal(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Número de spawns'
						variant='outlined'
						value={spawns}
						onChange={(e) => setSpawns(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Máximo de CP LV 39'
						variant='outlined'
						value={maxCp39}
						onChange={(e) => setMaxCp39(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Máximo de CP LV 40'
						variant='outlined'
						value={maxCp40}
						onChange={(e) => setMaxCp40(e.target.value)}
					/>
					<TextField
						value={evolved}
						className='text-field-mui'
						onChange={(e) => setEvolved(e.target.value)}
						select
						label='É evoluido'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={crossgen}
						className='text-field-mui'
						onChange={(e) => setCrossgen(e.target.value)}
						select
						label='Pode cruzar'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={legendary}
						className='text-field-mui'
						onChange={(e) => setLegendary(e.target.value)}
						select
						label='É lendário'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={aquireable}
						className='text-field-mui'
						onChange={(e) => setAquireable(e.target.value)}
						select
						label='É adquirivel'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={regional}
						className='text-field-mui'
						onChange={(e) => setRegional(e.target.value)}
						select
						label='É regional'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={raidable}
						className='text-field-mui'
						onChange={(e) => setRaidable(e.target.value)}
						select
						label='Pode fazer raid'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={shiny}
						className='text-field-mui'
						onChange={(e) => setShiny(e.target.value)}
						select
						label='É brilhante'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={nest}
						className='text-field-mui'
						onChange={(e) => setNest(e.target.value)}
						select
						label='Pode fazer ninho'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={isNew}
						className='text-field-mui'
						onChange={(e) => setIsNew(e.target.value)}
						select
						label='É novo'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={notGettable}
						className='text-field-mui'
						onChange={(e) => setNotGettable(e.target.value)}
						select
						label='É inatingivel'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={futureEvolve}
						className='text-field-mui'
						onChange={(e) => setFutureEvolve(e.target.value)}
						select
						label='Tem evolução futura'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
					<TextField
						value={hatchable}
						className='text-field-mui'
						onChange={(e) => setHatchable(e.target.value)}
						select
						label='Pode chocar'
					>
						<MenuItem key={1} value={1}>
							Sim
						</MenuItem>
						<MenuItem key={2} value={0}>
							Não
						</MenuItem>
					</TextField>
				</Styled.InputBox>
			</Styled.Content>
		</Styled.Wrapper>
	);
};
