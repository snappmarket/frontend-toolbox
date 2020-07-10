/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BorderOuterOutlined.svg');
}

const BorderOuterOutlined = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BorderOuterOutlined"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BorderOuterOutlinedHref"
        xlinkHref={`${importPrefix}#BorderOuterOutlined`}
      />
    </svg>
  );
};

BorderOuterOutlined.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BorderOuterOutlined.defaultProps = {
  size: 1.5,
};

export default BorderOuterOutlined;
