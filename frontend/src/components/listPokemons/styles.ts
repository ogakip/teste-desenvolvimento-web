import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 70%;
	height: calc(80% - 132px);
	max-height: calc(80% - 132px);
	overflow-y: scroll;
	border-radius: 10px;
	background-color: rgb(127 9 0 / 48%);
	box-shadow: rgb(234 47 47 / 91%) 0px 7px 29px 0px;
	padding: 10px;
	border: 1px solid #1976d2;

	button {
		color: white;
	}
`;

export const ListHeader = styled.div`
	width: 100%;
`;

export const ListBody = styled.div`
	width: 100%;
	height: calc(100% - 58px);
	justify-content: center;
	display: flex;
	margin-top: 10px;

	#simple-tabpanel-0 {
		width: 100%;

		> div {
			display: flex;
			justify-content: center;
			> p {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 10px;
			}
		}
	}

	> div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
`;
