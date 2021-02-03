import * as Style from './Header.style';

const Header = () => (
  <Style.Wrapper>
    <Style.Container>
      <Style.Details>
        <Style.Title>Pokédex</Style.Title>
        <Style.Subtitle>
          Search for Pokémon by name or using the National Pokédex number.
        </Style.Subtitle>
      </Style.Details>
    </Style.Container>
  </Style.Wrapper>
);

export default Header;
