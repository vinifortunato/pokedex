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
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 10px;
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

  @media (max-width: 674px) {
    width: 100%;
  }
`;

export const TableText = styled.td`
  color: #17171B;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

export const TableValue = styled.td`
  color: #747476;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: right;
`;

export const TableFeaturedValue = styled.td`
  color: #747476;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-align: right;
`;

export const NotAvailable = styled.p`
  color: #747476;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;
`;
