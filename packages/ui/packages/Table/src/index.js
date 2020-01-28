import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
} from './style';

const Table = props => {
  const { className } = props;
  return (
    <StyledTable className={className}>
    </StyledTable>
  );
};

Table.propTypes = {
  className: PropTypes.string,
};

Table.defaultProps = {
  className: '',
};

export default Table;
