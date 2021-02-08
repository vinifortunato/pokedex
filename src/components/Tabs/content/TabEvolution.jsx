import PropTypes from 'prop-types';
import * as Style from './Tab.style';

const TabEvolution = ({ featuredColor, id, selected }) => (
  <Style.Tab
    id={id}
    data-testid={id}
    className={selected ? 'in' : 'out'}
  >
    <Style.Title textColor={featuredColor}>Evolution</Style.Title>
    <Style.NotAvailable>Not available yet ;)</Style.NotAvailable>
  </Style.Tab>
);

TabEvolution.propTypes = {
  featuredColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default TabEvolution;
