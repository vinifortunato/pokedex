import List from './List';

const defaultItems = [
  {
    id: 1,
    name: 'bulbassaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
        },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      },
    },
  },
  {
    id: 2,
    name: 'ivysaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
        },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
        },
      },
    },
  },
  {
    id: 3,
    name: 'venusaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
        },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        },
      },
    },
  },
];

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    emptyText: {
      control: 'text',
      defaultValue: 'Pokémon not found!',
    },
    items: {
      control: 'object',
      defaultValue: defaultItems,
    },
    onClick: {
      action: 'onClick',
    },
  },
};

export const Default = ({ emptyText, items, onClick }) => (
  <List emptyText={emptyText} items={items} onClick={onClick} />
);

Default.defaultProps = List.defaultProps;
Default.propTypes = List.propTypes;
