import * as React from 'react';
import PropTypes from 'prop-types';
import { Img } from 'react-image';

import { LogoAnimation } from '../../Loading/src';

/**
 * A progressive image loader component
 * @param props
 * @returns {*}
 * @constructor
 */
const Image = ({ src, size, loader, error, ...rest }) => (
  <Img
    data-testid="image"
    src={src}
    loader={loader || <LogoAnimation size={size} />}
    unloader={error || <LogoAnimation size={size} animate={false} />}
    {...rest}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loader: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  size: PropTypes.number,
};

Image.defaultProps = {
  loader: false,
  error: false,
};

export default Image;
