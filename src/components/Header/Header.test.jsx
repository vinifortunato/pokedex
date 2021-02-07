import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('should render correctly', () => {
    render(<Header />, { wrapper: global.wrapper });
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
