import * as React from 'react';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useImage } from 'react-image';

import { LogoAnimation } from '../../Loading/src';

/**
 * A progressive image loader component
 * @param props
 * @returns {*}
 * @constructor
 */
const Image = ({ src, size, loader, error, ...rest }) => {
  /**
   * Ensure we have webp support
   * @type {boolean}
   */
  const hasWebPSupport = useMemo(() => {
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  }, []);

  /**
   * Preload supported image
   * @type {arg is Array<any>}
   */
  const hasMultiSrc = Array.isArray(src);
  let webpAddress = '';
  let imageAddress = src;
  if (hasMultiSrc) {
    webpAddress = (
      src.find(s => s.address.split('.').pop() === 'webp') || {
        address: '',
      }
    ).address;
    imageAddress = (
      src.find(s => s.address.split('.').pop() !== 'webp') || {
        address: '',
      }
    ).address;
  }
  const { isLoading, error: hasError } = useImage({
    srcList: hasWebPSupport && webpAddress ? webpAddress : imageAddress,
    useSuspense: false,
  });

  /**
   * Render picture tag
   * @param image
   * @returns {*}
   */
  const renderPicture = image => {
    const address = image.address || image;
    const type = address.split('.').pop();
    const sourceTagTypes = [
      { extension: 'avif', type: 'image/avif' },
      { extension: 'webp', type: 'image/webp' },
    ];
    const sourceTag = sourceTagTypes.filter(t => t.extension === type);
    const props = type.props || {};

    // eslint-disable-next-line no-nested-ternary
    return !sourceTag.length ? (
      <img src={address} alt={props.alt || ''} {...rest} />
    ) : hasWebPSupport ? (
      <source srcSet={address} type={sourceTag.type} {...props} />
    ) : null;
  };

  const Loader = loader || <LogoAnimation size={size} />;
  const Error = error || <LogoAnimation size={size} animate={false} />;

  // eslint-disable-next-line no-nested-ternary
  return isLoading ? (
    Loader
  ) : hasError ? (
    Error
  ) : (
    <picture data-testid="image">
      {Array.isArray(src)
        ? src.map(image => renderPicture(image))
        : renderPicture(src)}
    </picture>
  );
};

Image.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string,
        props: PropTypes.object,
      }),
    ),
  ]),
  loader: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  size: PropTypes.number,
};

Image.defaultProps = {
  loader: false,
  error: false,
};

export default Image;
