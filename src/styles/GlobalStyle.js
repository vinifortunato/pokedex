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
    background-color: ${({ theme }) => theme.color.background.white};
		font-family: 'SF Pro Display', Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizelegibility;
	}

  button, input {
    background-color: transparent;
    border: none;
    font-family: 'SF Pro Display', Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
    outline: none;
    text-rendering: optimizelegibility;
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.weight.normal};
    src: url('./assets/fonts/SFProDisplay-Regular.ttf');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    src: url('./assets/fonts/SFProDisplay-Medium.ttf');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    src: url('./assets/fonts/SFProDisplay-Bold.ttf');
  }

`;

export default GlobalStyle;
