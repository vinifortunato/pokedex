import Tag from './Tag';

const availableTypes = [
  'bug',
  'dark',
  'default',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: availableTypes,
      },
    },
    image: {
      control: {
        type: 'select',
        options: availableTypes,
      },
    },
    label: {
      control: 'text',
      defaultValue: 'Label',
    },
  },
};

export const Default = ({ color, image, label }) => (
  <Tag
    color={color}
    image={image}
    label={label}
  />
);

Default.defaultProps = Tag.defaultProps;
Default.propTypes = Tag.propTypes;
