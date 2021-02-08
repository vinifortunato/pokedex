import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
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

export const Default = ({ onClick, title, subtitle }) => (
  <Header onClick={onClick} title={title} subtitle={subtitle} />
);

Default.defaultProps = Header.defaultProps;
Default.propTypes = Header.propTypes;
