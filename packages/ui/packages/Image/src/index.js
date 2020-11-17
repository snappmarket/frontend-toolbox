import * as React from 'react';
import PropTypes from 'prop-types';
import ImageWebp from 'react-image-webp';

import { LogoAnimation } from '../../Loading/src';

/**
 * A progressive image loader component
 * @param props
 * @returns {*}
 * @constructor
 */
const Image = ({ src, webpSrc, size, loader, error, ...rest }) => (
  <ImageWebp
    data-testid="image"
    src={src}
    webp={webpSrc}
    loader={loader || <LogoAnimation size={size} />}
    unloader={error || <LogoAnimation size={size} animate={false} />}
    {...rest}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  webpSrc: PropTypes.string.isRequired,
  loader: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  size: PropTypes.number,
};

Image.defaultProps = {
  loader: false,
  error: false,
};

export default Image;
