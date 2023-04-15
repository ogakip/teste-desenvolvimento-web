import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 border: 0;
 font-family: 'Chivo Mono', monospace;
}

:root {
 --bg-color: #ca1d1d;
 --bg2-color: #F22E2E;
 --bg3-color: #0D0D0D;
 --title-color: #ffffff;
 --text-color: #d2d2d2;
 --white-color: #ffffff;
}

h1, h2, h3, h4 {
 color: var(--title-color);
 font-weight: 600;
}

span {
 font-weight: 300;
}
p {
 font-weight: 400;
}
`