/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./WifiSolidIcon.svg');
}

const WifiSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="WifiSolidIcon"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="WifiSolidIconHref"
        xlinkHref={`${importPrefix}#WifiSolidIcon`}
      />
    </svg>
  );
};

WifiSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

WifiSolidIcon.defaultProps = {
  size: 1.5,
};

export default WifiSolidIcon;
