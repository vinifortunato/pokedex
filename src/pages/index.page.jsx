import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Head, Header, List, Search,
} from '@src/components';
import api from '@src/api';

const Home = ({ initialData }) => {
  const [items, setItems] = useState(initialData.items);
  const onSearchSubmit = useCallback((value) => {
    if (!value) {
      setItems(initialData.items);
      return;
    }
    const localResults = items.filter((item) => item.name.toLowerCase() === value.toLowerCase());
    setItems(localResults);
  }, [items, initialData.items]);

  return (
    <div>
      <Head title="Pokédex" />
      <Header />
      <Search onSubmit={onSearchSubmit} />
      <List items={items} />
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
