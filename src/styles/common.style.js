import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex: 1;
  padding: ${({ theme }) => theme.spacings.md} 0px;
  position: relative
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.grid.container};
  padding: 0px ${({ theme }) => theme.spacings.xs};
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 728px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 660px;
  }
`;

const commonStyle = {
  Section,
  Container,
};

export default commonStyle;
