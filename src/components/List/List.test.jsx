import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';

describe('List Component', () => {
  it('should render correctly', () => {
    render(<List />, { wrapper: global.wrapper });
    expect(screen.getByTestId('list')).toBeInTheDocument();
  });

  it('should render items correctly', () => {
    const onClick = jest.fn();
    const item = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'image-url',
          },
        },
      },
      types: [
        {
          slot: 1,
          type: {
            name: 'water',
            url: '',
          },
        },
      ],
      stats: null,
    };
    const items = [item];

    render(<List items={items} onClick={onClick} />, { wrapper: global.wrapper });

    userEvent.click(screen.getByTestId('list-item-bulbasaur'));
    expect(onClick).toBeCalledWith(item);
  });
});
