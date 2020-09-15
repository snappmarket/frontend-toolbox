import * as React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableFooter,
  StyledTableRow,
  StyledTableHeaderColumn,
  StyledTableColumn,
} from './styles';

/* eslint-disable react/no-array-index-key */
const Table = props => {
  const { headers, data, footers, className } = props;
  return (
    <StyledTable className={className} data-testid="tableWrapper">
      {!!headers.length && (
        <StyledTableHeader data-testid="tableHeader">
          <StyledTableRow data-testid="tableHeaderRow">
            {headers.map((item, key) => (
              <StyledTableHeaderColumn key={key} data-testid="tableHeaderCol">
                {item}
              </StyledTableHeaderColumn>
            ))}
          </StyledTableRow>
        </StyledTableHeader>
      )}
      {!!data.length && (
        <StyledTableBody data-testid="tableBody">
          {data.map((item, key) => (
            <StyledTableRow key={key} data-testid="tableBodyRow">
              {item.map((value, index) => (
                <StyledTableColumn key={index} data-testid="tableBodyCol">{value}</StyledTableColumn>
              ))}
            </StyledTableRow>
          ))}
        </StyledTableBody>
      )}
      {!!footers.length && (
        <StyledTableFooter data-testid="tableFooter">
          <StyledTableRow data-testid="tableFooterRow">
            {footers.map((item, key) => (
              <StyledTableColumn key={key} data-testid="tableFooterCol">{item}</StyledTableColumn>
            ))}
          </StyledTableRow>
        </StyledTableFooter>
      )}
    </StyledTable>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.array,
  data: PropTypes.array,
  footers: PropTypes.array,
};

Table.defaultProps = {
  className: '',
  headers: [],
  data: [],
  footers: [],
};

export default Table;
