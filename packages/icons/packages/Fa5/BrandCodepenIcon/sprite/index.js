/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BrandCodepenIcon.svg');
}

const BrandCodepenIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BrandCodepenIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BrandCodepenIconHref"
        xlinkHref={`${importPrefix}#BrandCodepenIcon`}
      />
    </svg>
  );
};

BrandCodepenIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BrandCodepenIcon.defaultProps = {
  size: 1.5,
};

export default BrandCodepenIcon;
