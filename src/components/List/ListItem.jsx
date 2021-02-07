import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { Tag } from '@src/components';
import { zeroPad } from '@src/utils';
import api from '@src/api';
import * as Style from './ListItem.style';

const ListItem = ({ item, onClick }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      const response = await api.get(`/pokemon/${item.name}`);
      const {
        id, sprites, types, stats,
      } = response.data;
      const filteredData = {
        id,
        name: item.name,
        image: sprites.other['official-artwork'].front_default,
        types,
        stats,
      };
      setData(filteredData);
    };
    load();
  }, [item]);

  const handleOnClick = useCallback((event) => {
    event.preventDefault();
    if (!data || !onClick) {
      return;
    }
    onClick(data);
  }, [data, onClick]);

  return (
    <Style.Wrapper boxShadowColor={data ? data?.types[0].type.name : 'default'}>
      <Style.Container
        data-testid={`list-item-${item.name.toLowerCase()}`}
        onClick={handleOnClick}
        backgroundColor={data ? data?.types[0].type.name : 'default'}
      >
        <Style.Details>
          <Style.Id>{data ? `#${zeroPad(data.id, 3)}` : ''}</Style.Id>
          <Style.Name>{item.name}</Style.Name>
          <Style.Tags className={data ? 'in' : 'out'}>
            {data && (
            <>
              {data.types.map(({ type }) => (
                <Tag key={type.name} label={type.name} backgroundColor={type.name} />
              ))}
            </>
            )}
          </Style.Tags>
        </Style.Details>
        <Style.ImageContainer className={data ? 'in' : 'out'}>
          <>
            {data && (
              <Style.Image src={data.image} alt={item.name} />
            )}
          </>
        </Style.ImageContainer>
      </Style.Container>
    </Style.Wrapper>
  );
};

ListItem.defaultProps = {
  item: null,
  onClick: null,
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default ListItem;
