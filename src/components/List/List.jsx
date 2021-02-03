import ListItem from './ListItem';
import * as Style from './List.style';

const List = ({ items }) => {
  const map = items.map((item) => <ListItem key={item.name} item={item} />);

  return (
    <Style.Section>
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

export default List;
