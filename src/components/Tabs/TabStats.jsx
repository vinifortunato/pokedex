import PropTypes from 'prop-types';
import * as Style from './Tabs.style';

const TabStats = ({ id, selected, featuredColor }) => (
  <Style.Tab
    id={id}
    data-testid={id}
    className={selected ? 'in' : 'out'}
  >
    <Style.Title textColor={featuredColor}>Base Stats</Style.Title>
  </Style.Tab>
);

TabStats.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  featuredColor: PropTypes.string.isRequired,
};

export default TabStats;
