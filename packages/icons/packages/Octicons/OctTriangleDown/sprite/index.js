/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./OctTriangleDown.svg');
}

const OctTriangleDown = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="OctTriangleDown"
      viewBox="0 0 12 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="OctTriangleDownHref"
        xlinkHref={`${importPrefix}#OctTriangleDown`}
      />
    </svg>
  );
};

OctTriangleDown.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctTriangleDown.defaultProps = {
  size: 1.5,
};

export default OctTriangleDown;
