import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledGrid } from './styles';

const Grid = props => {
  const { perRow, children, className } = props;
  return (
    <StyledGrid data-testid="grid" className={className} perRow={perRow}>
      {children}
    </StyledGrid>
  );
};

const sizePropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
Grid.propTypes = {
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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  perRow: 1,
  className: '',
};

export default Grid;
