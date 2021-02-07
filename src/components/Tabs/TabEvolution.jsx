import PropTypes from 'prop-types';
import * as Style from './Tabs.style';

const TabEvolution = ({ id, selected, featuredColor }) => (
  <Style.Tab
    id={id}
    data-testid={id}
    className={selected ? 'in' : 'out'}
  >
    <Style.Title textColor={featuredColor}>Evolution</Style.Title>
  </Style.Tab>
);

TabEvolution.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  featuredColor: PropTypes.string.isRequired,
};

export default TabEvolution;
