// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
/* eslint-disable prettier/prettier */
const StyledGrid = Styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
  ${props =>
    typeof props.perRow === 'object'
      ? Object.keys(props.perRow).map(
        viewport => `
    @media(min-width: ${props.theme.viewports[viewport]}px){
      width: ${100 / props.perRow[viewport]}%;
    }`,
      )
      : `
    width: calc(100% / ${props.perRow});`}
  }
`;
/* eslint-enable prettier/prettier */
export { StyledGrid };
