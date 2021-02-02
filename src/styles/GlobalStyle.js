import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	* {
		box-sizing: border-box;
    margin: 0px;
    padding: 0px;
	}

	html, body, #__next {
		height: 100%;
	}

	body {
    background-color: ${({ theme }) => theme.colors.background};
		font-family: Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizelegibility;
	}

  input {
    border: none;
    outline: none;
  }

`;

export default GlobalStyle;
