import PropTypes from 'prop-types';
import * as Style from './Tab.style';

const TabStats = ({
  content, featuredColor, id, selected,
}) => {
  const { name, stats } = content;

  const labels = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
    speed: 'Speed',
  };

  let total = 0;
  const tbodyMap = stats.map((element) => {
    total += element.base_stat;
    return (
      <tr key={`${name}-${element.stat.name}`}>
        <Style.TableText>{labels[element.stat.name]}</Style.TableText>
        <Style.TableValue>{element.base_stat}</Style.TableValue>
      </tr>
    );
  });

  return (
    <Style.Tab
      id={id}
      data-testid={id}
      className={selected ? 'in' : 'out'}
    >
      <Style.Title textColor={featuredColor}>Base Stats</Style.Title>
      <Style.TableContainer>
        <Style.Table>
          <tbody>
            {tbodyMap}
          </tbody>
          <tfoot>
            <tr>
              <Style.TableText>Total</Style.TableText>
              <Style.TableFeaturedValue>{total}</Style.TableFeaturedValue>
            </tr>
          </tfoot>
        </Style.Table>
      </Style.TableContainer>
    </Style.Tab>
  );
};

TabStats.propTypes = {
  content: PropTypes.object.isRequired,
  featuredColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default TabStats;
