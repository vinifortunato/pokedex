import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@src/themes';

// eslint-disable-next-line react/prop-types, react/display-name
global.wrapper = ({ children }) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
