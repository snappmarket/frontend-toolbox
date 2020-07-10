/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandDAndD.svg');
}

const Fa5BrandDAndD = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandDAndD"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandDAndDHref"
        xlinkHref={`${importPrefix}#Fa5BrandDAndD`}
      />
    </svg>
  );
};

Fa5BrandDAndD.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandDAndD.defaultProps = {
  size: 1.5,
};

export default Fa5BrandDAndD;
