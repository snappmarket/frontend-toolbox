/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandSchlix.svg');
}

const Fa5BrandSchlix = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandSchlix"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandSchlixHref"
        xlinkHref={`${importPrefix}#Fa5BrandSchlix`}
      />
    </svg>
  );
};

Fa5BrandSchlix.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandSchlix.defaultProps = {
  size: 1.5,
};

export default Fa5BrandSchlix;
