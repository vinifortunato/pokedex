import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@src/styles';
import defaultTheme from '@src/themes';

export const decorators = [
  Story => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
}
