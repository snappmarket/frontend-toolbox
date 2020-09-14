// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { rem, color } from '@snappmarket/helpers'

export const StyledBreadcrumbWrapper = Styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color:  ${color('white')};
  border-radius: ${rem(0.2)};
  font-size:${rem(1.5)};
`;

export const StyledBreadcrumbItem = Styled.div`
  padding: ${rem(1)};
  a {
    text-decoration: none;
    color: ${color('gray', 'normal')};
    font-size: ${rem(1.2)};
  }
  h2 {
    color: ${color('gray', 'normal')};
    font-size: ${rem(1.2)};
  }
`;

export const StyledBreadcrumbItemSeparator = Styled.div``;

export const StyledBreadcrumbItemWrapper = Styled.div`
  display: flex;
  align-items: center;
`;
