import { render } from '@testing-library/react';
import Head from './Head';

describe('Head Component', () => {
  it('should render correctly', () => {
    render(<Head title="Title" />, {
      wrapper: global.wrapper,
    });
    expect(document.querySelector('head')).toBeInTheDocument();
  });
});
