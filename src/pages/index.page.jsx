import PropTypes from 'prop-types';
import {
  Head, Header, List, Search,
} from '@src/components';
import { commonStyle } from '@src/styles';
import api from '@src/api';

const Home = ({ data }) => (
  <div>
    <Head title="Pokédex" />
    <Header />
    <commonStyle.Section>
      <commonStyle.Container>
        <Search />
      </commonStyle.Container>
    </commonStyle.Section>
    <List items={data.items} />
  </div>
);

Home.defaultProps = {
  data: null,
};

Home.propTypes = {
  data: PropTypes.shape({
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
  const response = await api.get('/pokemon');

  const {
    count, next, previous, results,
  } = response.data;

  const data = {
    count,
    next,
    previous,
    items: results,
  };

  return {
    props: {
      data,
    },
  };
}

export default Home;
