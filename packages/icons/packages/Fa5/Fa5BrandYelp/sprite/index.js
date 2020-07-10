/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandYelp.svg');
}

const Fa5BrandYelp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandYelp"
      viewBox="0 0 384 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandYelpHref"
        xlinkHref={`${importPrefix}#Fa5BrandYelp`}
      />
    </svg>
  );
};

Fa5BrandYelp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandYelp.defaultProps = {
  size: 1.5,
};

export default Fa5BrandYelp;
