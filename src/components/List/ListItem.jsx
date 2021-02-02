import { useState, useEffect } from 'react';
import { Tag } from '@src/components';
import api from '@src/api';
import * as Style from './ListItem.style';

const ListItem = ({ item }) => {
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

  return (
    <Style.Wrapper>
      <Style.Container>
        {data ? (
          <>
            <Style.Details>
              <Style.Id>#001</Style.Id>
              <Style.Name>{name}</Style.Name>
              <Style.Tags>
                {data.types.map(({ type }) => <Tag key={type.name} label={type.name} />)}
              </Style.Tags>
            </Style.Details>
            <Style.Image src={data.image} alt={name} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Style.Container>
    </Style.Wrapper>
  );
};

export default ListItem;
