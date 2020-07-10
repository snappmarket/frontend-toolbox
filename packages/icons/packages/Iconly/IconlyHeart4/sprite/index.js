/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IconlyHeart4.svg');
}

const IconlyHeart4 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IconlyHeart4"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IconlyHeart4Href"
        xlinkHref={`${importPrefix}#IconlyHeart4`}
      />
    </svg>
  );
};

IconlyHeart4.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconlyHeart4.defaultProps = {
  size: 1.5,
};

export default IconlyHeart4;
