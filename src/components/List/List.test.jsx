import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import api from '@src/api';
import List from './List';

describe('List Component', () => {
  it('should render correctly', () => {
    render(<List />, { wrapper: global.wrapper });
    expect(screen.getByTestId('list')).toBeInTheDocument();
  });

  it('should render items and load data correctly', async () => {
    const onClick = jest.fn();
    const items = [
      { name: 'bulbasaur' },
    ];

    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = {
      id: 1,
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

    mockAdapter.onGet(`${api.instance.defaults.baseURL}pokemon/bulbasaur`).reply(200, mockResponse);
    render(<List items={items} onClick={onClick} />, { wrapper: global.wrapper });

    userEvent.click(screen.getByTestId('list-item-bulbasaur'));
    expect(onClick).toHaveBeenCalledTimes(0);

    await waitFor(() => screen.getByTestId('list-item-bulbasaur'));
    userEvent.click(screen.getByTestId('list-item-bulbasaur'));

    const expected = {
      id: 1,
      name: 'bulbasaur',
      image: 'image-url',
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

    expect(onClick).toBeCalledWith(expected);
  });
});
