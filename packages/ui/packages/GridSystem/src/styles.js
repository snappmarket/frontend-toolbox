import Styled from 'styled-components';

const StyledRow = Styled.div`
  display: flex;
  flex-direction: row;
  margin-left: calc(${(props) => props.theme.defaultRem} * -0.8);
  margin-right: calc(${(props) => props.theme.defaultRem} * -0.8);
  flex-wrap: wrap;
`;
const StyledColumn = Styled.div`
  padding-left: calc(${(props) => props.theme.defaultRem} * 0.8);
  padding-right: calc(${(props) => props.theme.defaultRem} * 0.8);
  position: relative;
  width: 100%;
  ${(props) => Object.keys(props.layouts).map(
    (layout) => `
      @media (min-width: ${props.theme.viewports[layout]}px){
        max-width: ${(100 * props.layouts[layout].size) / 12}%;
        flex: 0 0 ${(100 * props.layouts[layout].size) / 12}%;
        margin-right: ${(100 * props.layouts[layout].offset) / 12}%;
        order: ${props.layouts[layout].order};
      }
    `,
  )}
`;

const StyledContainer = Styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(${(props) => props.theme.defaultRem} * 1.6);
  padding-right: calc(${(props) => props.theme.defaultRem} * 1.6);
  z-index: 1;
  &.fixed {
    max-width: 100%;
    @media (min-width: ${(props) => props.theme.viewports.sm}px) {
      width: 576px;
    }
    @media (min-width: ${(props) => props.theme.viewports.md}px) {
      width: 768px;
    }
    @media (min-width: ${(props) => props.theme.viewports.lg}px) {
      width: 992px;
    }
    @media (min-width: ${(props) => props.theme.viewports.xl}px) {
      width: 1250px;
    }
  }
`;

export { StyledRow, StyledColumn, StyledContainer };
