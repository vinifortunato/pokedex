import styled from 'styled-components';
import { commonStyle } from '@src/styles';

export const Wrapper = styled.section`
  background-image: url('/assets/images/header-bg.svg');
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  flex: 1;
  padding-top: ${({ theme }) => theme.spacings.xxl};
  position: relative;
`;

export const Container = styled(commonStyle.Container)`
  align-items: flex-start;
`;

export const Details = styled.div`
  margin: 0px ${({ theme }) => theme.spacings.xs};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.texts.black};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: ${({ theme }) => theme.font.heights.lg};
  margin-bottom: ${({ theme }) => theme.spacings.xs};
  width: fit-content;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.texts.gray};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: ${({ theme }) => theme.font.weights.regular};
  line-height: ${({ theme }) => theme.font.heights.sm};
  margin-bottom: 25px;
`;
