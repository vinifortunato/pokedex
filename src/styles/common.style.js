import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 0px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.grid.container};
  padding-left: 15px;
  padding-right: 15px;
`;

const commonStyle = {
  Section,
  Container,
};

export default commonStyle;
