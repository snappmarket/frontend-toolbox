/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandDochub.svg');
}

const Fa5BrandDochub = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandDochub"
      viewBox="0 0 416 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandDochubHref"
        xlinkHref={`${importPrefix}#Fa5BrandDochub`}
      />
    </svg>
  );
};

Fa5BrandDochub.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandDochub.defaultProps = {
  size: 1.5,
};

export default Fa5BrandDochub;
