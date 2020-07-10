/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandViber.svg');
}

const Fa5BrandViber = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandViber"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandViberHref"
        xlinkHref={`${importPrefix}#Fa5BrandViber`}
      />
    </svg>
  );
};

Fa5BrandViber.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandViber.defaultProps = {
  size: 1.5,
};

export default Fa5BrandViber;
