import styled from 'styled-components';
import { commonStyle } from '@src/styles';

export const Page = styled.div``;

export const Container = styled(commonStyle.Container)``;

export const LoadMoreWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonLoadMore = styled.button`
  color: ${({ theme }) => theme.colors.texts.gray};
  cursor: pointer;
  padding: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.texts.black};
  }
`;
