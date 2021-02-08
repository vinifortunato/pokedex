import Resume from './Resume';

export default {
  title: 'Components/Resume',
  component: Resume,
  argTypes: {
    backgroundColor: {
      control: 'color',
      defaultValue: '#8BBE8A',
    },
    id: {
      control: 'number',
      defaultValue: 1,
    },
    name: {
      control: 'text',
      defaultValue: 'bulbassaur',
    },
    image: {
      control: 'text',
      defaultValue: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    types: {
      control: 'object',
      defaultValue: [
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
    },
  },
};

export const Default = ({
  backgroundColor, id, name, image, types,
}) => (
  <div style={{ backgroundColor }}>
    <Resume id={id} name={name} image={image} types={types} />
  </div>
);

Default.defaultProps = Resume.defaultProps;
Default.propTypes = Resume.propTypes;
