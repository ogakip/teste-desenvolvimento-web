import styled from 'styled-components';
import charizardBG from '../../assets/charizardbg.jpg';

export const bgCharizard = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background-image: url(${charizardBG});
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
z-index: 2;
`;

export const Wrapper = styled.div`
	width: 70%;
	border-radius: 10px;
 position: relative;
 box-shadow: #7F0900 0px 7px 29px 0px;

	h1 {
		color: var(--white-color);
	}
`;
