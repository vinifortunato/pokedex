import styled from 'styled-components';
import { commonStyle } from '@src/styles';

export const Section = styled(commonStyle.Section)`
  padding-top: 0px;
`;

export const Container = styled(commonStyle.Container)``;

export const List = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  list-style: none;
`;

export const NotFound = styled.p`
  color: #747476;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px 20px;
`;
