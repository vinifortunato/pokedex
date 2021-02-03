import PropTypes from 'prop-types';
import * as Style from './Tag.style';

const Tag = ({ label, backgroundColor }) => (
  <Style.Wrapper backgroundColor={backgroundColor}>
    <Style.Label>{label}</Style.Label>
  </Style.Wrapper>
);

Tag.defaultProps = {
  backgroundColor: 'default',
  label: 'No tag',
};

Tag.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
};

export default Tag;
