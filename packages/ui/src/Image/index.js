import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

import { LogoAnimation } from '../Loading';

/**
 * A progressive image loader component
 * @param props
 * @returns {*}
 * @constructor
 */
const Image = props => {
  const { src, loader, error, ...rest } = props;
  return <Img src={src} loader={loader} unloader={error} {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loader: PropTypes.node,
  error: PropTypes.node,
};

// todo: add our loader here
Image.defaultProps = {
  loader: <LogoAnimation size={3} />,
  error: <LogoAnimation size={3} />,
};

export default Image;
