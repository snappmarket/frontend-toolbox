import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledBox, StyledImage, StyledMap } from './styles';

/**
 * Just a wrapper to box skeleton
 * @param props
 * @returns {*}
 * @constructor
 */
const BoxSkeleton = props => {

  const { type, ...rest } = props;

  const skeleton = {
    box: <StyledBox data-testid="skeleton" {...rest} />,
    image: <StyledImage data-testid="skeleton" {...rest} />,
    map: <StyledMap data-testid="skeleton" {...rest} />,
  };

  return skeleton[type];
};

/**
 * Prop types
 * @type {{animationDuration: *, alignItems: *, background: *, width: *, className: *, backgroundSize: *, float: *, radius: *, justifyContent: *, height: *}}
 */
BoxSkeleton.propTypes = {
  type: PropTypes.oneOf(['box', 'image', 'map']),
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
  type: 'box',
  animationDuration: 3,
  width: 3,
  height: 3,
  backgroundSize: 6,
  radius: 0.5,
};

export { BoxSkeleton };
