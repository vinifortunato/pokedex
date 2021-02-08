import { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as Style from './Header.style';

const Header = ({ onClick, title, subtitle }) => {
  const handleOnTitleClick = useCallback((event) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <Style.Wrapper data-testid="header">
      <Style.Container>
        <Style.Details>
          <Style.Title data-testid="header-title" onClick={handleOnTitleClick}>{title}</Style.Title>
          <Style.Subtitle>
            {subtitle}
          </Style.Subtitle>
        </Style.Details>
      </Style.Container>
    </Style.Wrapper>
  );
};

Header.defaultProps = {
  onClick: null,
  title: 'Pokédex',
  subtitle: 'Search for Pokémon by name or using the National Pokédex number.',
};

Header.propTypes = {
  onClick: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
