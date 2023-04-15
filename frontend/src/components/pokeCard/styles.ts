import styled from 'styled-components';

export const Wrapper = styled.span`
 width: 95%;
 padding: 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: var(--white-color);
 border-radius: 10px;

 >button {
  padding: 10px;
  border-radius: 5px;
  background-color: var(--bg2-color);
  cursor: pointer;
 }
`;