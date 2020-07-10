/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./AirportShuttleRoundedIcon.svg');
}

const AirportShuttleRoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="AirportShuttleRoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="AirportShuttleRoundedIconHref"
        xlinkHref={`${importPrefix}#AirportShuttleRoundedIcon`}
      />
    </svg>
  );
};

AirportShuttleRoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

AirportShuttleRoundedIcon.defaultProps = {
  size: 1.5,
};

export default AirportShuttleRoundedIcon;
