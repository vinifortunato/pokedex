import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Head, Header, List, Search,
} from '@src/components';
import { addPokemon, addPokemons } from '@src/redux/modules/pokemon';
import PropTypes from 'prop-types';
import api from '@src/api';
import * as Style from './index.style';

const Home = ({ initialData }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const localData = useSelector((state) => state.pokemon.loaded);

  const [loading, setLoading] = useState(true);
  const [currentData, setCurrentData] = useState(initialData);
  const [searchResult, setSearchResult] = useState(null);

  const filterExisting = useCallback((data) => data.filter((newItem) => (
    !localData.find((localItem) => localItem.name === newItem.name))), [localData]);

  useEffect(() => {
    const { results } = initialData;

    const filtered = filterExisting(results);

    const urlsMap = filtered.map((item) => item.url);
    if (urlsMap.length <= 0) {
      setLoading(false);
      return;
    }
    const load = async (urls) => {
      const response = await api.getAll(urls);
      setLoading(false);
      const responseMap = response.map((element) => element.data);
      dispatch(addPokemons(responseMap));
    };
    load(urlsMap);
  }, [dispatch, filterExisting, initialData]);

  const handleOnSearchSubmit = useCallback((searchValue) => {
    if (!searchValue) {
      setSearchResult(null);
      return;
    }
    const localResults = localData.filter((element) => (
      element.name.toLowerCase() === searchValue.toLowerCase()));
    if (localResults.length > 0) {
      setSearchResult(localResults);
      return;
    }
    const search = async () => {
      const response = await api.get(`/pokemon/${searchValue.toLowerCase()}`);
      setLoading(false);
      if (!response || !response.data.name) {
        setSearchResult([]);
        return;
      }
      const { data } = response;
      dispatch(addPokemon(data));
      setSearchResult([data]);
    };
    setSearchResult([]);
    setLoading(true);
    search();
  }, [dispatch, localData]);

  const handleListItemClick = useCallback((item) => {
    router.push(`/${item.name}`);
  }, [router]);

  const handleOnHeaderClick = useCallback(() => {
    setSearchResult(null);
  }, []);

  const handleButtonLoadMoreClick = useCallback(() => {
    if (loading) {
      return;
    }
    const loadMore = async () => {
      const response = await api.get(currentData.next);
      const indexes = response.data;
      setCurrentData(indexes);
      const filteredUrls = filterExisting(indexes.results);
      const urlsMap = filteredUrls.map((item) => item.url);
      const allResponses = await api.getAll(urlsMap);
      const responsesMap = allResponses.map((element) => element.data);
      dispatch(addPokemons(responsesMap));
      setLoading(false);
    };
    setLoading(true);
    loadMore();
  }, [currentData.next, dispatch, filterExisting, loading]);

  return (
    <Style.Page>
      <Head title="Pokédex" />
      <Header onClick={handleOnHeaderClick} />
      <Search onSubmit={handleOnSearchSubmit} />
      <List items={searchResult || localData} loading={loading} onClick={handleListItemClick} />
      <Style.Container>
        {(localData.length > 0 && !searchResult) && (
          <Style.LoadMoreWrapper>
            <Style.ButtonLoadMore type="button" onClick={handleButtonLoadMoreClick}>{loading ? 'Loading...' : 'Load more Pokémons'}</Style.ButtonLoadMore>
          </Style.LoadMoreWrapper>
        )}
      </Style.Container>
    </Style.Page>
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
    results: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }),
};

export async function getStaticProps() {
  const response = await api.get('/pokemon');
  return {
    props: {
      initialData: response.data,
    },
  };
}

export default Home;
