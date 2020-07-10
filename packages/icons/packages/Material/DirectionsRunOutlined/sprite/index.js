/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./DirectionsRunOutlined.svg');
}

const DirectionsRunOutlined = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="DirectionsRunOutlined"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="DirectionsRunOutlinedHref"
        xlinkHref={`${importPrefix}#DirectionsRunOutlined`}
      />
    </svg>
  );
};

DirectionsRunOutlined.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DirectionsRunOutlined.defaultProps = {
  size: 1.5,
};

export default DirectionsRunOutlined;
