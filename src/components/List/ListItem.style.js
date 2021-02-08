import styled from 'styled-components';
import { hexToRgba } from '@src/utils';

export const Wrapper = styled.li`
  border-radius: 10px;
  box-shadow: 0px 10px 20px ${({ theme, boxShadowColor }) => hexToRgba(theme.colors.backgroundTypes[boxShadowColor], 0.4)};
  margin: ${({ theme }) => theme.spacings.lg} ${({ theme }) => theme.spacings.xs} 0px ${({ theme }) => theme.spacings.xs};
  max-width: 334px;
  transition: box-shadow 300ms ease-in-out;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme, backgroundColor }) => theme.colors.backgroundTypes[backgroundColor]};
  background-image: url('/assets/images/list-item-pattern.svg'), url('/assets/images/list-item-bg.svg');
  background-position: 36% 10%, right center;
  background-repeat: no-repeat;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 115px;
  padding: ${({ theme }) => theme.spacings.md};
  position: relative;
  transition: background-color 300ms ease-in-out;
  width: 100%;
`;

export const Details = styled.div``;

export const Id = styled.p`
  color: ${({ theme }) => theme.colors.texts.black};
  font-size: ${({ theme }) => theme.font.sizes.xs};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: ${({ theme }) => theme.font.heights.xs};
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.backgrounds.white};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: ${({ theme }) => theme.font.heights.md};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Tags = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  bottom: 10px;
  height: 130px;
  position: absolute;
  right: 10px;
  width: 130px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
