// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {rem, color} from '@snappmarket/helpers'

export const StyledPaginationWrapper = Styled.nav``;
export const StyledPaginationItemsWrapper = Styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${rem(0, -0.4)};
  cursor: pointer;
`;
export const StyledNavigateButton = Styled.li`
  border-radius: ${rem(0.5)};
  color: ${color('taupe')};
  width: ${rem(4)};
  height: ${rem(4)};
  font-size: ${rem(1.6)};
  margin: ${rem(0, 0.4)};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    &:first-child {
      margin-left: ${rem(-0.8)};
    }
  }
  &[disabled] {
    opacity: 0.7;
  }
`;
export const StyledPaginationItem = Styled(StyledNavigateButton)`
  background-color: ${color('blue', 'bright')};
  transition: all 0.3s ease 0.1s;
  &:hover, &.active {
    background-color: ${color('blue', 'normal')};
    color: ${color('white')};
  }
  &.active:hover {
    cursor: default;
  }
`;
