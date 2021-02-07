import PropTypes from 'prop-types';
import * as Style from './Tabs.style';

const TabAbout = ({ id, selected, featuredColor }) => (
  <Style.Tab
    id={id}
    data-testid={id}
    className={selected ? 'in' : 'out'}
  >
    <Style.Title textColor={featuredColor}>About</Style.Title>
  </Style.Tab>
);

TabAbout.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  featuredColor: PropTypes.string.isRequired,
};

export default TabAbout;
