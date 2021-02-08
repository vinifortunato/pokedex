import styled from 'styled-components';
import { commonStyle } from '@src/styles';

export const Section = styled(commonStyle.Section)`
  padding-bottom: 0px;
  padding-top: 0px;
`;

export const Container = styled(commonStyle.Container)``;

export const Form = styled.form`
  display: flex;
  flex: 1;
`;

export const FormContent = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgrounds.light};
  border-radius: 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 0px ${({ theme }) => theme.spacings.xs};
  position: relative;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.texts.gray};
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: ${({ theme }) => theme.font.weights.regular};
  line-height: ${({ theme }) => theme.font.heights.sm};
  padding: 20.5px 10px 20.5px 0px;
`;

export const Button = styled.button`
  background-image: url('/assets/images/icon-search.svg');
  background-position: 60% center;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 60px;
  padding: 0px 0px 0px 46px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0px 0px 0px 36px;
  }
`;
