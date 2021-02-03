import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Tag } from '@src/components';
import api from '@src/api';
import * as Style from './ListItem.style';

const ListItem = ({ item }) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { name } = item;

  useEffect(() => {
    const load = async () => {
      const response = await api.get(`/pokemon/${name}`);
      const { sprites, types } = response.data;
      console.log(response.data);
      const filteredData = {
        image: sprites.other['official-artwork'].front_default,
        types,
      };
      setData(filteredData);
    };

    load();
  }, [name]);

  const handleOnClick = useCallback(() => {
    router.push(`/${name}`);
  }, [name, router]);

  return (
    <Style.Wrapper boxShadowColor={data ? data?.types[0].type.name : 'default'}>
      <Style.Container onClick={handleOnClick} backgroundColor={data ? data?.types[0].type.name : 'default'}>
        <Style.Details>
          <Style.Id>#001</Style.Id>
          <Style.Name>{name}</Style.Name>
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
              <Style.Image src={data.image} alt={name} />
            )}
          </>
        </Style.ImageContainer>
      </Style.Container>
    </Style.Wrapper>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ListItem;
