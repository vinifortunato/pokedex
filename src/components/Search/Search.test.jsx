import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search Component', () => {
  it('should render correctly', () => {
    const onSubmit = jest.fn();
    render(<Search onSubmit={onSubmit} />, { wrapper: global.wrapper });
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });

  it('should submit correctly', () => {
    const onSubmit = jest.fn();
    render(<Search onSubmit={onSubmit} />, { wrapper: global.wrapper });

    userEvent.type(screen.getByTestId('search-input'), 'Hello, Test!');
    expect(screen.getByTestId('search-input')).toHaveValue('Hello, Test!');

    userEvent.click(screen.getByTestId('search-submit'));
    expect(onSubmit).toHaveBeenCalledWith('Hello, Test!');
  });
});
