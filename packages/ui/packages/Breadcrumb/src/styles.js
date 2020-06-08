// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';

export const StyledBreadcrumbWrapper = Styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color:  ${props => props.theme.colors.white};
  border-radius: calc(${props => props.theme.defaultRem} * 0.2);
  font-size: calc(${props => props.theme.defaultRem} * 1.5);
`;

export const StyledBreadcrumbItem = Styled.div`
  padding: calc(${props => props.theme.defaultRem});
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.gray.normal};
    font-size: calc(${props => props.theme.defaultRem} * 1.2);
  }
  h2 {
    color: ${props => props.theme.colors.gray.normal};
    font-size: calc(${props => props.theme.defaultRem} * 1.2);
  }
`;

export const StyledBreadcrumbItemSeparator = Styled.div``;

export const StyledBreadcrumbItemWrapper = Styled.div`
  display: flex;
  align-items: center;
`;
