/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SignalWifi4BarLockSharpIcon.svg');
}

const SignalWifi4BarLockSharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SignalWifi4BarLockSharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SignalWifi4BarLockSharpIconHref"
        xlinkHref={`${importPrefix}#SignalWifi4BarLockSharpIcon`}
      />
    </svg>
  );
};

SignalWifi4BarLockSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SignalWifi4BarLockSharpIcon.defaultProps = {
  size: 1.5,
};

export default SignalWifi4BarLockSharpIcon;
