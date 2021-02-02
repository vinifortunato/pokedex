import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@src/styles';
import defaultTheme from '@src/themes';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

App.defaultProps = {
  Component: null,
  pageProps: null,
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
