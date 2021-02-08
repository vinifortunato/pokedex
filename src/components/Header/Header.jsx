import PropTypes from 'prop-types';
import * as Style from './Header.style';

const Header = ({ title, subtitle }) => (
  <Style.Wrapper data-testid="header">
    <Style.Container>
      <Style.Details>
        <Style.Title>{title}</Style.Title>
        <Style.Subtitle>
          {subtitle}
        </Style.Subtitle>
      </Style.Details>
    </Style.Container>
  </Style.Wrapper>
);

Header.defaultProps = {
  title: 'Pokédex',
  subtitle: 'Search for Pokémon by name or using the National Pokédex number.',
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
