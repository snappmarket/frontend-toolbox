import React from 'react';
import PropTypes from 'prop-types';

import { StyledRow } from './styles';

const Row = props => {
  const { className, children } = props;

  const render = () => <StyledRow className={className}>{children}</StyledRow>;

  return render();
};

Row.propTypes = {
  className: PropTypes.string,
  children : PropTypes.node
};
Row.defaultProps = {
  className: '',
  children : <></>
};

export default Row;
