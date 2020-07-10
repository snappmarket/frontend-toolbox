/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SignalWifi4BarIcon.svg');
}

const SignalWifi4BarIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SignalWifi4BarIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SignalWifi4BarIconHref"
        xlinkHref={`${importPrefix}#SignalWifi4BarIcon`}
      />
    </svg>
  );
};

SignalWifi4BarIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SignalWifi4BarIcon.defaultProps = {
  size: 1.5,
};

export default SignalWifi4BarIcon;
