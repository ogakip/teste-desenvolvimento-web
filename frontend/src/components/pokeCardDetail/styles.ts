import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 6;
	background-color: #00000087;
`;

export const Content = styled.div`
	width: 60%;
	max-height: 80%;
	overflow-y: scroll;
	border-radius: 10px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	z-index: 7;
	background-color: #6e0e0e;
	box-shadow: rgb(234 47 47 / 91%) 0px 7px 29px 0px;
	color: white;
	* {
		border-color: white !important;
		color: white !important;
	}

 .text-field-mui {
  width: 210px;
 }

	> button {
		padding: 10px;
		background-color: var(--bg2-color);
		border-radius: 10px;
		cursor: pointer;
	}
`;
export const InputBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
 
`;
