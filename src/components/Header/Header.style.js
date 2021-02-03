import styled from 'styled-components';
import { commonStyle } from '@src/styles';

export const Wrapper = styled.section`
  background-image: url('/assets/images/header-bg.svg');
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  flex: 1;
  padding-top: 100px;
  position: relative;
`;

export const Container = styled(commonStyle.Container)`
  align-items: flex-start;
  flex-direction: column;
`;

export const Details = styled.div`
  margin: 0px 10px;
`;

export const Title = styled.h1`
  color: #17171B;
  font-size: 32px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 38px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: #747476;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: 19px;
  margin-bottom: 25px;
`;
