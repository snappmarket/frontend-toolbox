/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BatteryPlug60Icon.svg');
}

const BatteryPlug60Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BatteryPlug60Icon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BatteryPlug60IconHref"
        xlinkHref={`${importPrefix}#BatteryPlug60Icon`}
      />
    </svg>
  );
};

BatteryPlug60Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BatteryPlug60Icon.defaultProps = {
  size: 1.5,
};

export default BatteryPlug60Icon;
