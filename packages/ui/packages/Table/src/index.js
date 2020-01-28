import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableRow,
  StyledTableHeaderColumn,
  StyledTableColumn,
} from './style';

/* eslint-disable react/no-array-index-key */
const Table = props => {
  const { headers, data, className } = props;
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
              {Object.values(item).map((value, index) => (
                <StyledTableColumn key={index}>{value}</StyledTableColumn>
              ))}
            </StyledTableRow>
          ))}
        </StyledTableBody>
      )}
    </StyledTable>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.array,
  data: PropTypes.array,
};

Table.defaultProps = {
  className: '',
  headers: [],
  data: [],
};

export default Table;
