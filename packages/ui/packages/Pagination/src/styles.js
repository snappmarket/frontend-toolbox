// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
const StyledPaginationWrapper = Styled.nav``;
const StyledPaginationItemsWrapper = Styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 calc(${props => props.theme.defaultRem} * -0.4);
  cursor: pointer;
`;
const StyledNavigateButton = Styled.li`
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
  color: ${props => props.theme.colors.taupe};
  width: calc(${props => props.theme.defaultRem} * 4);
  height: calc(${props => props.theme.defaultRem} * 4);
  font-size: calc(${props => props.theme.defaultRem} * 1.6);
  margin: 0 calc(${props => props.theme.defaultRem} * 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledPaginationItem = Styled(StyledNavigateButton)`
  background-color: ${props => props.theme.colors.blue.bright};
  transition: all 0.3s ease 0.1s;
  ${props =>
    props.disabled
      ? `
    cursor: not-allowed;
    opacity: 0.7;
  `
      : `
    &:hover, &.active {
      background-color: ${props.theme.colors.blue.normal};
      color: ${props.theme.colors.white};
    }
    &.active:hover {
      cursor: default;
    }
  `}
`;

export {
  StyledPaginationWrapper,
  StyledPaginationItemsWrapper,
  StyledNavigateButton,
  StyledPaginationItem,
};
