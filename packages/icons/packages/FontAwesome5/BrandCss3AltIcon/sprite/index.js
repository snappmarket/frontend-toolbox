/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BrandCss3AltIcon.svg');
}

const BrandCss3AltIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BrandCss3AltIcon"
      viewBox="0 0 384 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BrandCss3AltIconHref"
        xlinkHref={`${importPrefix}#BrandCss3AltIcon`}
      />
    </svg>
  );
};

BrandCss3AltIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BrandCss3AltIcon.defaultProps = {
  size: 1.5,
};

export default BrandCss3AltIcon;
