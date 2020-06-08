/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./GooglePlayButton.svg');
}

const GooglePlayButton = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="GooglePlayButton"
      viewBox="0 0 128 40"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="GooglePlayButtonHref"
        xlinkHref={`${importPrefix}#GooglePlayButton`}
      />
    </svg>
  );
};

GooglePlayButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GooglePlayButton.defaultProps = {
  size: 1.5,
};

export default GooglePlayButton;
