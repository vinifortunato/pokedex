import Search from './Search';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    defaultValue: {
      control: 'text',
      defaultValue: null,
    },
    onSubmit: {
      action: 'onSubmit',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'What Pokémon are you looking for?',
    },
  },
};

export const Default = ({ defaultValue, onSubmit, placeholder }) => (
  <Search defaultValue={defaultValue} onSubmit={onSubmit} placeholder={placeholder} />
);

Default.defaultProps = Search.defaultProps;
Default.propTypes = Search.propTypes;
