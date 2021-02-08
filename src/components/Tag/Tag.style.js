import styled from 'styled-components';

export const Wrapper = styled.span`
  align-items: center;
  background-color: ${({ theme, backgroundColor }) => theme.colors.types[backgroundColor]};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.xxs};
  padding: ${({ theme }) => theme.spacings.xxs};

  &:not(:first-child) {
    margin-left: ${({ theme }) => theme.spacings.xxs};
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.texts.white};
  font-size: ${({ theme }) => theme.font.sizes.xs};
  font-weight: ${({ theme }) => theme.font.weights.medium};
  line-height: ${({ theme }) => theme.font.heights.xs};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Image = styled.img`
  height: 14px;
  margin-right: ${({ theme }) => theme.spacings.xxs};
  width: auto;
`;
