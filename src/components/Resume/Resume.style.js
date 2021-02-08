import styled from 'styled-components';
import { commonStyle } from '@src/styles';

export const Section = styled.section`
  padding-bottom: ${({ theme }) => theme.spacings.md};
  padding-top: ${({ theme }) => theme.spacings.md};
`;

export const Container = styled(commonStyle.Container)`
  flex-direction: column;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: ${({ theme }) => theme.layers.base};
`;

export const Image = styled.img`
  height: 125px;
  margin-right: 25px;
  width: 125px;
`;

export const Details = styled.div``;

export const Id = styled.p`
  color: ${({ theme }) => theme.colors.texts.black};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: ${({ theme }) => theme.font.heights.sm};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.backgrounds.white};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: ${({ theme }) => theme.font.heights.lg};

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
