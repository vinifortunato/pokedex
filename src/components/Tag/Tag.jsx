import * as Style from './Tag.style';

const Tag = ({ label }) => (
  <Style.Wrapper>
    <Style.Label>{label}</Style.Label>
  </Style.Wrapper>
);

export default Tag;
