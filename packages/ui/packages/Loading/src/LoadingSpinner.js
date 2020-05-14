import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledLoading } from './styles';

const LoadingSpinner = ({ direction, className }) => (
  <StyledLoading
    data-testid="loadingSpinner"
    direction={direction}
    className={`${className} loader`}
  />
);

LoadingSpinner.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
};
LoadingSpinner.defaultProps = {
  direction: 'right',
  className: '',
};

export default LoadingSpinner;
