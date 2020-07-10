/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandPiedPiperPp.svg');
}

const Fa5BrandPiedPiperPp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandPiedPiperPp"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandPiedPiperPpHref"
        xlinkHref={`${importPrefix}#Fa5BrandPiedPiperPp`}
      />
    </svg>
  );
};

Fa5BrandPiedPiperPp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandPiedPiperPp.defaultProps = {
  size: 1.5,
};

export default Fa5BrandPiedPiperPp;
