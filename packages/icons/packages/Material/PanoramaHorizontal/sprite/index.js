/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./PanoramaHorizontal.svg');
}

const PanoramaHorizontal = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PanoramaHorizontal"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="PanoramaHorizontalHref"
        xlinkHref={`${importPrefix}#PanoramaHorizontal`}
      />
    </svg>
  );
};

PanoramaHorizontal.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PanoramaHorizontal.defaultProps = {
  size: 1.5,
};

export default PanoramaHorizontal;
