/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BrandSteamSymbolIcon.svg');
}

const BrandSteamSymbolIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BrandSteamSymbolIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BrandSteamSymbolIconHref"
        xlinkHref={`${importPrefix}#BrandSteamSymbolIcon`}
      />
    </svg>
  );
};

BrandSteamSymbolIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BrandSteamSymbolIcon.defaultProps = {
  size: 1.5,
};

export default BrandSteamSymbolIcon;
