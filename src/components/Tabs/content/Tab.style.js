import styled from 'styled-components';

export const Tab = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  left: 0px;
  opacity: 0;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: opacity 400ms ease-in-out;

  &.in {
    opacity: 1;
  }

  &.out {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Title = styled.p`
  color: ${({ theme, textColor }) => theme.colors.types[textColor]};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: ${({ theme }) => theme.font.heights.sm};
  margin-bottom: ${({ theme }) => theme.spacings.xs};
`;

export const TableContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0px 10px;
  width: 250px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const TableText = styled.td`
  color: ${({ theme }) => theme.colors.texts.black};
  font-size: ${({ theme }) => theme.font.sizes.xs};
  font-weight: ${({ theme }) => theme.font.weights.medium};
  line-height: ${({ theme }) => theme.font.heights.xs};
`;

export const TableValue = styled.td`
  color: ${({ theme }) => theme.colors.texts.gray};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: ${({ theme }) => theme.font.weights.regular};
  line-height: ${({ theme }) => theme.font.heights.sm};
  text-align: right;
`;

export const TableFeaturedValue = styled.td`
  color: ${({ theme }) => theme.colors.texts.gray};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: ${({ theme }) => theme.font.heights.sm};
  text-align: right;
`;

export const NotAvailable = styled.p`
  color: ${({ theme }) => theme.colors.texts.gray};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  line-height: ${({ theme }) => theme.font.heights.sm};
  margin-bottom: ${({ theme }) => theme.spacings.xxs};
`;
