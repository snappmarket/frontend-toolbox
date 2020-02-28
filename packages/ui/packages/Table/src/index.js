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
} from './style';

/* eslint-disable react/no-array-index-key */
const Table = (props) => {
  const {
    headers, data, footers, className,
  } = props;
  return (
    <StyledTable className={className}>
      {!!headers.length && (
        <StyledTableHeader>
          <StyledTableRow>
            {headers.map((item, key) => (
              <StyledTableHeaderColumn key={key}>
                {item}
              </StyledTableHeaderColumn>
            ))}
          </StyledTableRow>
        </StyledTableHeader>
      )}
      {!!data.length && (
        <StyledTableBody>
          {data.map((item, key) => (
            <StyledTableRow key={key}>
              {item.map((value, index) => (
                <StyledTableColumn key={index}>{value}</StyledTableColumn>
              ))}
            </StyledTableRow>
          ))}
        </StyledTableBody>
      )}
      {!!footers.length && (
        <StyledTableFooter>
          <StyledTableRow>
            {footers.map((item, key) => (
              <StyledTableColumn key={key}>{item}</StyledTableColumn>
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
