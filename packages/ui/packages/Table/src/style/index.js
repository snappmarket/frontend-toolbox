import Styled from 'styled-components';

const StyledTable = Styled.table`
  width: 100%;
  border-radius: calc(${(props) => props.theme.defaultRem} * 0.5);
`;

const StyledTableHeader = Styled.thead`
  background-color: ${(props) => props.theme.colors.gray.bright};
`;
const StyledTableBody = Styled.tbody``;
const StyledTableFooter = Styled.tfoot`
  background-color: ${(props) => props.theme.colors.gray.bright};
`;

const StyledTableRow = Styled.tr`
  &:not(:last-child){
    border-bottom: solid calc(${(props) => props.theme.defaultRem} * 0.1) ${(props) => props.theme.colors.gray['ultra-light']};
  }
  > * {
    padding: calc(${(props) => props.theme.defaultRem} * 1);
    &:not(:first-child){
      border-right: solid calc(${(props) => props.theme.defaultRem} * 0.1) ${(props) => props.theme.colors.gray['ultra-light']};
    }
  }
`;

const StyledTableHeaderColumn = Styled.th``;
const StyledTableColumn = Styled.td``;

export {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableFooter,
  StyledTableRow,
  StyledTableHeaderColumn,
  StyledTableColumn,
};
