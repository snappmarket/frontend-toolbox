/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./OctPlusSmall.svg');
}

const OctPlusSmall = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="OctPlusSmall"
      viewBox="0 0 7 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="OctPlusSmallHref"
        xlinkHref={`${importPrefix}#OctPlusSmall`}
      />
    </svg>
  );
};

OctPlusSmall.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctPlusSmall.defaultProps = {
  size: 1.5,
};

export default OctPlusSmall;
