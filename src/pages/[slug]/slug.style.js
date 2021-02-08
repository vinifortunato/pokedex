import styled from 'styled-components';
import { commonStyle } from '@src/styles';
import { hexToRgba } from '@src/utils';

export const Page = styled.div`
  background-color: white;
  background-image: ${({ theme, backgroundColor }) => (
    `linear-gradient(${theme.colors.backgroundTypes[backgroundColor]} 25%, ${theme.colors.backgrounds.white})`
  )};
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Container = styled(commonStyle.Container)`
  padding-top: 20px;
`;

export const BackgroundText = styled.span`
  color: ${({ theme, textColor }) => theme.colors.backgroundTypes[textColor]};
  font-size: 100px;
  font-weight: 700;
  left: 50%;
  line-height: 119px;
  pointer-events: none;
  position: absolute;
  text-align: center;
  -webkit-text-stroke-color: ${({ theme }) => hexToRgba(theme.colors.texts.white, 0.12)};
  -webkit-text-stroke-width: 2px;
  text-transform: uppercase;
  top: 25px;
  transform: translate(-50%, 0%);
`;

export const BackButton = styled.button`
  background-image: url('/assets/images/back-arrow.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 20px;
  padding: 5px;
  width: 20px;
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px;
`;

export const Message = styled.p`
  color: #17171B;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 25px;
`;
