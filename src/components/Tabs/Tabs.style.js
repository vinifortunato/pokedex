import styled from 'styled-components';
import { commonStyle } from '@src/styles';

export const Section = styled.section``;

export const Container = styled(commonStyle.Container)`
  flex-direction: column;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.white};
  border-radius: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacings.md};
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-around;
  width: 100%;
`;

export const NavItem = styled.button`
  align-items: center;
  color: ${({ theme }) => theme.colors.backgrounds.white};
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: ${({ theme }) => theme.font.weights.regular};
  justify-content: center;
  line-height: ${({ theme }) => theme.font.heights.sm};
  padding: ${({ theme }) => theme.spacings.sm} 0px;

  &.selected {
    font-weight: ${({ theme }) => theme.font.weights.bold};
  }
`;

export const Tabs = styled.div`
  height: ${({ contentHeight }) => contentHeight}px;
  position: relative;
  transition: height 200ms ease-in-out;
  width: 100%;
`;
