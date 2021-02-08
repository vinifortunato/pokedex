import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Pokédex',
    },
    subtitle: {
      control: 'text',
      defaultValue: 'Search for Pokémon by name or using the National Pokédex number.',
    },
  },
};

export const Default = ({ title, subtitle }) => (
  <Header title={title} subtitle={subtitle} />
);

Default.defaultProps = Header.defaultProps;
Default.propTypes = Header.propTypes;
