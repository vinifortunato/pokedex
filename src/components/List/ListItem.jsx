import { useCallback } from 'react';
import { Tag } from '@src/components';
import { zeroPad } from '@src/utils';
import PropTypes from 'prop-types';
import * as Style from './ListItem.style';

const ListItem = ({ item, onClick }) => {
  const handleOnClick = useCallback((event) => {
    event.preventDefault();
    onClick(item);
  }, [item, onClick]);

  return (
    <Style.Wrapper boxShadowColor={item.types[0].type.name}>
      <Style.Container
        data-testid={`list-item-${item.name.toLowerCase()}`}
        onClick={handleOnClick}
        backgroundColor={item.types[0].type.name}
      >
        <Style.Details>
          <Style.Id>{`#${zeroPad(item.id, 3)}`}</Style.Id>
          <Style.Name>{item.name}</Style.Name>
          <Style.Tags>
            {item.types.map(({ type }) => (
              <Tag key={type.name} label={type.name} backgroundColor={type.name} />
            ))}
          </Style.Tags>
        </Style.Details>
        <Style.ImageContainer>
          {item && (
            <Style.Image src={item.sprites.other['official-artwork'].front_default} alt={item.name} />
          )}
        </Style.ImageContainer>
      </Style.Container>
    </Style.Wrapper>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
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
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
