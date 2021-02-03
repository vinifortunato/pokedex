import styled from 'styled-components';
import hexToRgba from '@src/utils';

export const Wrapper = styled.li`
  border-radius: 10px;
  box-shadow: 0px 10px 20px ${({ theme, boxShadowColor }) => hexToRgba(theme.color.backgroundType[boxShadowColor], 0.4)};
  margin: 40px 10px 0px 10px;
  max-width: 334px;
  transition: box-shadow 300ms ease-in-out;
  width: 100%;

  @media (max-width: 751px) {
    max-width: 300px;
  }

  @media (max-width: 674px) {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme, backgroundColor }) => theme.color.backgroundType[backgroundColor]};
  background-image: url('/assets/images/list-item-pattern.svg'), url('/assets/images/list-item-bg.svg');
  background-position: 36% 10%, right center;
  background-repeat: no-repeat;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 115px;
  padding: 20px;
  position: relative;
  transition: background-color 300ms ease-in-out;
  width: 100%;
`;

export const Details = styled.div``;

export const Id = styled.p`
  color: #17171B;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;

export const Name = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Tags = styled.div`
  display: flex;
  transition: opacity 300ms ease-in-out;

  &.in {
    opacity: 1;
  }

  &.out {
    opacity: 0;
  }
`;

export const ImageContainer = styled.div`
  bottom: 10px;
  height: 130px;
  position: absolute;
  right: 10px;
  transition: opacity 300ms ease-in-out;
  width: 130px;

  &.in {
    opacity: 1;
  }

  &.out {
    opacity: 0;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
