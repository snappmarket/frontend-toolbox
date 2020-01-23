import Styled from 'styled-components';

const StyledBreadcrumbWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color:  ${props => props.theme.colors.white};s
    border-radius: calc(${props => props.theme.defaultRem} * 0.2);
    font-size: calc(${props => props.theme.defaultRem} * 1.5);
`;
const StyledBreadcrumbItem = Styled.div`
    padding: calc(${props => props.theme.defaultRem});
    a {
        text-decoration: none;
        font-size: calc(${props => props.theme.defaultRem} * 1.2);
    }
`;
const StyledBreadcrumbItemSeparator = Styled.div``;
const StyledBreadcrumbItemWrapper = Styled.div`
    display: flex;
    align-items: center;
`;

export {
  StyledBreadcrumbWrapper,
  StyledBreadcrumbItem,
  StyledBreadcrumbItemSeparator,
  StyledBreadcrumbItemWrapper,
};
