import React from 'react';
import PropTypes from 'prop-types';

import { StyledProducts } from './styles';

const ProductGridLoading = ({
  className,
  count,
  LoadingComponent,
  ...rest
}) => (
  <StyledProducts className={`-mr-1 -ml-1 ${className}`} {...rest}>
    {[...Array(count).keys()].map(key => (
      <div className="pr-1 pl-1" key={key}>
        <LoadingComponent key={key} />
      </div>
    ))}
  </StyledProducts>
);

const sizePropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
ProductGridLoading.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  LoadingComponent: PropTypes.func.isRequired,
  perRow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      xs: sizePropType,
      sm: sizePropType,
      md: sizePropType,
      lg: sizePropType,
      xl: sizePropType,
    }),
  ]),
};

ProductGridLoading.defaultProps = {
  className: '',
  count: 5,
  perRow: 5,
};

export default ProductGridLoading;
