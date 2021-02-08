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
  padding: 20px;
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
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  line-height: 19px;
  padding: 15px 0px;

  &.selected {
    font-weight: 700;
  }
`;

export const Tabs = styled.div`
  height: ${({ contentHeight }) => contentHeight}px;
  position: relative;
  transition: height 200ms ease-in-out;
  width: 100%;
`;
