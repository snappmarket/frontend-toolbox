/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandFoursquare.svg');
}

const Fa5BrandFoursquare = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandFoursquare"
      viewBox="0 0 368 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandFoursquareHref"
        xlinkHref={`${importPrefix}#Fa5BrandFoursquare`}
      />
    </svg>
  );
};

Fa5BrandFoursquare.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandFoursquare.defaultProps = {
  size: 1.5,
};

export default Fa5BrandFoursquare;
