import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledColumn } from './styles';

const Col = props => {
  const { xs, sm, md, lg, xl, className, children } = props;
  const layouts = {};
  Object.keys({
    xs,
    sm,
    md,
    lg,
    xl,
  }).forEach(layout => {
    if (props[layout]) {
      if (typeof props[layout] === 'object') {
        const { size = 12, order = 'unset', offset = 0 } = props[layout];
        layouts[layout] = {
          size,
          order,
          offset,
        };
      } else {
        layouts[layout] = {
          size: parseInt(props[layout], 0),
          order: 'unset',
          offset: 0,
        };
      }
    }
  });

  return (
    <StyledColumn
      layouts={layouts}
      className={className}
      data-testid="colGridSystem"
    >
      {children}
    </StyledColumn>
  );
};
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
]);

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
};

Col.defaultProps = {
  children: <></>,
  className: '',
  xs: 12,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

export default Col;
