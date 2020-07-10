/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandAccusoft.svg');
}

const Fa5BrandAccusoft = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandAccusoft"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandAccusoftHref"
        xlinkHref={`${importPrefix}#Fa5BrandAccusoft`}
      />
    </svg>
  );
};

Fa5BrandAccusoft.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandAccusoft.defaultProps = {
  size: 1.5,
};

export default Fa5BrandAccusoft;
