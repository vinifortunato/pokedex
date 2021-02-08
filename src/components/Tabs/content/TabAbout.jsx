import PropTypes from 'prop-types';
import * as Style from './Tab.style';

const TabAbout = ({ featuredColor, id, selected }) => (
  <Style.Tab
    id={id}
    data-testid={id}
    className={selected ? 'in' : 'out'}
  >
    <Style.Title textColor={featuredColor}>About</Style.Title>
    <Style.NotAvailable>Not available yet ;)</Style.NotAvailable>
  </Style.Tab>
);

TabAbout.propTypes = {
  featuredColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default TabAbout;
