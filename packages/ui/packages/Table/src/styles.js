// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {rem, viewport, color} from "@snappmarket/helpers";

export const StyledTable = Styled.table`
  width: 100%;
  border: solid ${rem(0.1)} ${color('gray', 'ultra-light')};
  border-radius: ${rem(0.5)};

  @media(max-width: ${viewport('md', -1)}) {
    &.responsive {
      display: flex;
      thead {
        > tr {
          display: flex;
          flex-direction: column;
          height: 100%;
          > * {
            &:not(:last-child){
             border-bottom: solid ${rem(0.1)} ${color('gray', 'ultra-light')};
            }
          }
        }
      }
      tbody {
        display: flex;
        flex: 1;
        overflow-x: auto;
        > tr {
          display: flex;
          flex-direction: column;
          td {
            white-space: nowrap;
            &:not(:last-child){
             border-bottom: solid ${rem(0.1)} ${color('gray', 'ultra-light')};
            }
          }
        }
      }
      tfoot {
        display: none;
      }
    }
  }
`;

export const StyledTableHeader = Styled.thead`
  background-color: ${color('gray', 'bright')};
`;
export const StyledTableBody = Styled.tbody``;
export const StyledTableFooter = Styled.tfoot`
  background-color: ${color('gray', 'bright')};
`;

export const StyledTableRow = Styled.tr`
  &:not(:last-child){
    border-bottom: solid ${rem(0.1)} ${color('gray', 'ultra-light')};
  }
  > * {
    padding: ${rem(1)};
    &:not(:first-child){
      border-right: solid ${rem(0.1)} ${color('gray', 'ultra-light')};
    }
  }
`;

export const StyledTableHeaderColumn = Styled.th`
  font-size: ${rem(1.4)};
  font-weight: 500;
`;
export const StyledTableColumn = Styled.td`
  font-size: ${rem(1.2)};
`;
