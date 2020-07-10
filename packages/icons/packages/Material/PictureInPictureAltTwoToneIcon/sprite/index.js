/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./PictureInPictureAltTwoToneIcon.svg');
}

const PictureInPictureAltTwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PictureInPictureAltTwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="PictureInPictureAltTwoToneIconHref"
        xlinkHref={`${importPrefix}#PictureInPictureAltTwoToneIcon`}
      />
    </svg>
  );
};

PictureInPictureAltTwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PictureInPictureAltTwoToneIcon.defaultProps = {
  size: 1.5,
};

export default PictureInPictureAltTwoToneIcon;
