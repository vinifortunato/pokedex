import PropTypes from 'prop-types';
import * as Style from './Tag.style';

const Tag = ({ color, image, label }) => (
  <Style.Wrapper data-testid="tag" backgroundColor={color}>
    <Style.Image alt={label} src={`/assets/images/types/${image}.svg`} />
    <Style.Label>{label}</Style.Label>
  </Style.Wrapper>
);

Tag.defaultProps = {
  color: 'default',
  image: 'default',
  label: 'No tag',
};

Tag.propTypes = {
  color: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
};

export default Tag;
