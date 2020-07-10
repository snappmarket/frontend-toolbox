/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4VideoCamera.svg');
}

const Fa4VideoCamera = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4VideoCamera"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4VideoCameraHref"
        xlinkHref={`${importPrefix}#Fa4VideoCamera`}
      />
    </svg>
  );
};

Fa4VideoCamera.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4VideoCamera.defaultProps = {
  size: 1.5,
};

export default Fa4VideoCamera;
