import Styled from 'styled-components';

const StyledTable = Styled.table`
  width: 100%;
  border-radius: calc(${(props) => props.theme.defaultRem} * 0.5);
`;

const StyledTableHeader = Styled.thead``;
const StyledTableBody = Styled.tbody``;
const StyledTableFooter = Styled.tfoot``;
const StyledTableRow = Styled.tr``;
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
