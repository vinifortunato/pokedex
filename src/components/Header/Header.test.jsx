import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header Component', () => {
  it('should render correctly', () => {
    render(<Header />, { wrapper: global.wrapper });
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should not call onClick when it is not passed as prop', () => {
    const onClick = jest.fn();
    render(<Header />, { wrapper: global.wrapper });
    userEvent.click(screen.getByTestId('header-title'));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should call onClick correctly when header title was clicked', () => {
    const onClick = jest.fn();
    render(<Header onClick={onClick} />, { wrapper: global.wrapper });
    userEvent.click(screen.getByTestId('header-title'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
