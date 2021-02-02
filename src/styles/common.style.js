import styled from 'styled-components';

const Section = styled.section`
  padding: 20px 0px;
  position: relative;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1062px;
  @media (max-width: 1106px) {
    max-width: 708px;
  }

  @media (max-width: 752px) {

  }
`;

const commonStyle = {
  Section,
  Container,
};

export default commonStyle;
