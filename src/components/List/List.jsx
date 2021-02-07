import PropTypes from 'prop-types';
import ListItem from './ListItem';
import * as Style from './List.style';

const List = ({ items, onClick }) => {
  const map = items.map((item) => (
    <ListItem
      key={item.name}
      item={item}
      onClick={onClick}
    />
  ));

  return (
    <Style.Section data-testid="list">
      <Style.Container>
        {map.length > 0 ? (
          <Style.List>
            {map}
          </Style.List>
        ) : (
          <Style.NotFound>Pokémon not found!</Style.NotFound>
        )}
      </Style.Container>
    </Style.Section>
  );
};

List.defaultProps = {
  items: [],
  onClick: null,
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func,
};

export default List;
