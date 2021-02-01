import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@src/styles';
import defaultTheme from '@src/themes';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
