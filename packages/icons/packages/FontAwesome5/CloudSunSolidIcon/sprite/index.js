/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CloudSunSolidIcon.svg');
}

const CloudSunSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CloudSunSolidIcon"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CloudSunSolidIconHref"
        xlinkHref={`${importPrefix}#CloudSunSolidIcon`}
      />
    </svg>
  );
};

CloudSunSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CloudSunSolidIcon.defaultProps = {
  size: 1.5,
};

export default CloudSunSolidIcon;
