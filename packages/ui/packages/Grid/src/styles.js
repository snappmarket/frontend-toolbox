// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {viewport} from '@snappmarket/helpers'
/* eslint-disable prettier/prettier */
const StyledGrid = Styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
  ${props =>
    typeof props.perRow === 'object' ?
      Object.keys(props.perRow).map(size => `
        @media(min-width: ${viewport(size)(props)}){
          width: ${100 / props.perRow[size]}%;
        }`,
      ) : `
    width: ${100 / props.perRow}%`
}
`;
/* eslint-enable prettier/prettier */
export { StyledGrid };
