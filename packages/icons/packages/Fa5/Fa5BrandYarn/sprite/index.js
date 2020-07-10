/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandYarn.svg');
}

const Fa5BrandYarn = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandYarn"
      viewBox="0 0 496 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandYarnHref"
        xlinkHref={`${importPrefix}#Fa5BrandYarn`}
      />
    </svg>
  );
};

Fa5BrandYarn.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandYarn.defaultProps = {
  size: 1.5,
};

export default Fa5BrandYarn;
