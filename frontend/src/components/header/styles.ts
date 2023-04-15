import styled from 'styled-components';
import charizardBG from '../../assets/charizardbg.jpg';

export const bgCharizard = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background-color: rgb(127 9 0 / 48%);
	box-shadow: rgb(234 47 47 / 91%) 0px 7px 29px 0px;
	background-size: 'cover';
	background-position: center -250px;
	opacity: 0.5;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
`;

export const Content = styled.div`
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	z-index: 3;

	.input-mui {
		* {
			color: white;
		}

		> label {
			font-weight: 400;
		}

		> div {
			> fieldset {
				border-color: white;

				:focus {
					outline-color: red;
				}
			}
		}
	}

	.select-mui {
		* {
			color: white;
			border-color: white;
			outline-color: white;
		}
	}

	> button {
		padding: 10px;
		border-radius: 5px;
		background-color: var(--bg2-color);
		cursor: pointer;
		color: white;
		font-weight: bold;
		z-index: 3;
	}
`;

export const Wrapper = styled.div`
	width: 70%;
	border-radius: 10px;
	position: relative;
	box-shadow: #7f0900 0px 7px 29px 0px;
	border: 1px solid #1976d2;

	h1 {
		color: var(--white-color);
	}
`;
