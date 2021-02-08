import PropTypes from 'prop-types';
import ListItem from './ListItem';
import * as Style from './List.style';

const List = ({ emptyText, items, onClick }) => {
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
          <Style.NotFound>{emptyText}</Style.NotFound>
        )}
      </Style.Container>
    </Style.Section>
  );
};

List.defaultProps = {
  emptyText: 'Pokémon not found!',
  items: [],
  onClick: null,
};

List.propTypes = {
  emptyText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }),
        }),
      ).isRequired,
      sprites: PropTypes.shape({
        other: PropTypes.shape({
          'official-artwork': PropTypes.shape({
            front_default: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ),
  onClick: PropTypes.func,
};

export default List;
