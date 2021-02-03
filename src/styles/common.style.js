import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex: 1;
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
  max-width: 1082px;
  padding: 0px 10px;
  @media (max-width: 1106px) {
    max-width: 728px;
  }

  @media (max-width: 752px) {
    max-width: 660px;
  }

  @media (max-width: 752px) {
    max-width: 660px;
  }
`;

const commonStyle = {
  Section,
  Container,
};

export default commonStyle;
