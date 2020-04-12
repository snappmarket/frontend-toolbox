import * as React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

import { LogoAnimation } from '../../Loading/src';

/**
 * A progressive image loader component
 * @param props
 * @returns {*}
 * @constructor
 */
const Image = props => {
  const { src, size, ...rest } = props;
  let { loader, error } = props;

  if(!loader) {
    loader = <LogoAnimation size={size} />;
  }
  if(!error) {
    error = <LogoAnimation size={size} />;
  }

  return <Img data-testid="image" src={src} loader={loader} unloader={error} {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loader: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.bool,
  ]),
  size: PropTypes.number,
};

Image.defaultProps = {
  loader: false,
  error: false,
};

export default Image;
