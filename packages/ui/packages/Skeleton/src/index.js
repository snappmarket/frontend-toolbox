import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledBox } from './styles';

/**
 * Just a wrapper to box skeleton
 * @param props
 * @returns {*}
 * @constructor
 */
const BoxSkeleton = props => <StyledBox data-testid="skeleton" {...props} />;

/**
 * Prop types
 * @type {{animationDuration: *, alignItems: *, background: *, width: *, className: *, backgroundSize: *, float: *, radius: *, justifyContent: *, height: *}}
 */
BoxSkeleton.propTypes = {
  className: PropTypes.string,
  justBorder: PropTypes.bool,
  background: PropTypes.string,
  backgroundSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animationDuration: PropTypes.number,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxSkeleton.defaultProps = {
  animationDuration: 3,
  width: 3,
  height: 3,
  backgroundSize: 6,
  radius: 0.5,
};

export { BoxSkeleton };
