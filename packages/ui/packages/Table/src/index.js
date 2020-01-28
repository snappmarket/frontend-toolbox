import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledTableHeaderColumn,
} from './style';

/* eslint-disable react/no-array-index-key */
const Table = props => {
  const { headers, className } = props;
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
    </StyledTable>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.array,
};

Table.defaultProps = {
  className: '',
  headers: [],
};

export default Table;
