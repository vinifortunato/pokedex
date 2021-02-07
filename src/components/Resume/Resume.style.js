import styled from 'styled-components';
import { commonStyle } from '@src/styles';

export const Section = styled.section`
  padding-bottom: 20px;
  padding-top: 20px;
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
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.backgrounds.white};
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;

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
