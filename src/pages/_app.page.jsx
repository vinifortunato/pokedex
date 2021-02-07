import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@src/styles';
import defaultTheme from '@src/themes';
import store from '@src/redux/store';

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
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
