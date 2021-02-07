import styled from 'styled-components';

export const Wrapper = styled.span`
  background-color: ${({ theme, backgroundColor }) => theme.colors.types[backgroundColor]};
  border-radius: 3px;
  margin-top: 5px;
  padding: 5px;

  &:not(:first-child) {
    margin-left: 5px;
  }
`;

export const Label = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  &::first-letter {
    text-transform: uppercase;
  }
`;
