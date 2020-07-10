/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BrandBehanceIcon.svg');
}

const BrandBehanceIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BrandBehanceIcon"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BrandBehanceIconHref"
        xlinkHref={`${importPrefix}#BrandBehanceIcon`}
      />
    </svg>
  );
};

BrandBehanceIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BrandBehanceIcon.defaultProps = {
  size: 1.5,
};

export default BrandBehanceIcon;
