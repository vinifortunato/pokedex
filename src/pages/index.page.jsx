import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
  Head, Header, List, Search,
} from '@src/components';
import { useDispatch } from 'react-redux';
import { selectPokemon } from '@src/redux/modules/pokemon';
import api from '@src/api';

const Home = ({ initialData }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [items, setItems] = useState(initialData.items);
  const handleOnSearchSubmit = useCallback((value) => {
    if (!value) {
      setItems(initialData.items);
      return;
    }
    const localResults = items.filter((item) => item.name.toLowerCase() === value.toLowerCase());
    setItems(localResults);
  }, [items, initialData.items]);

  const handleOnClickListItem = useCallback((item) => {
    dispatch(selectPokemon(item));
    router.push(`/${item.name}`);
  }, [dispatch, router]);

  return (
    <div>
      <Head title="Pokédex" />
      <Header />
      <Search onSubmit={handleOnSearchSubmit} />
      <List items={items} onClick={handleOnClickListItem} />
    </div>
  );
};

Home.defaultProps = {
  initialData: null,
};

Home.propTypes = {
  initialData: PropTypes.shape({
    count: PropTypes.number,
    next: PropTypes.string,
    previous: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }),
};

export async function getStaticProps() {
  // ?limit=20&offset=20
  const response = await api.get('/pokemon');

  const {
    count, next, previous, results,
  } = response.data;

  const initialData = {
    count,
    next,
    previous,
    items: results,
  };

  return {
    props: {
      initialData,
    },
  };
}

export default Home;
