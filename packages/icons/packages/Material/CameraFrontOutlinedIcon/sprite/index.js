/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CameraFrontOutlinedIcon.svg');
}

const CameraFrontOutlinedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CameraFrontOutlinedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CameraFrontOutlinedIconHref"
        xlinkHref={`${importPrefix}#CameraFrontOutlinedIcon`}
      />
    </svg>
  );
};

CameraFrontOutlinedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CameraFrontOutlinedIcon.defaultProps = {
  size: 1.5,
};

export default CameraFrontOutlinedIcon;
