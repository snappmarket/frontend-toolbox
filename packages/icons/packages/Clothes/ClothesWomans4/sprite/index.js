/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ClothesWomans4.svg');
}

const ClothesWomans4 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ClothesWomans4"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ClothesWomans4Href"
        xlinkHref={`${importPrefix}#ClothesWomans4`}
      />
    </svg>
  );
};

ClothesWomans4.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ClothesWomans4.defaultProps = {
  size: 1.5,
};

export default ClothesWomans4;
