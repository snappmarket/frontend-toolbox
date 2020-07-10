/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./DragIndicatorOutlined.svg');
}

const DragIndicatorOutlined = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="DragIndicatorOutlined"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="DragIndicatorOutlinedHref"
        xlinkHref={`${importPrefix}#DragIndicatorOutlined`}
      />
    </svg>
  );
};

DragIndicatorOutlined.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DragIndicatorOutlined.defaultProps = {
  size: 1.5,
};

export default DragIndicatorOutlined;
