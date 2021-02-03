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
  background-color: #F2F2F2;
  border-radius: 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 0px 10px;
  position: relative;
`;

export const Input = styled.input`
  color: #747476;
  display: flex;
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  padding: 20.5px 10px 20.5px 0px;
`;

export const Button = styled.button`
  background-image: url('/assets/images/icon-search.svg');
  background-position: 60% center;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 60px;
  padding: 0px 0px 0px 46px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0px 0px 0px 36px;
  }
`;
