/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CubesIcon.svg');
}

const CubesIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CubesIcon"
      viewBox="0 0 2304 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CubesIconHref"
        xlinkHref={`${importPrefix}#CubesIcon`}
      />
    </svg>
  );
};

CubesIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CubesIcon.defaultProps = {
  size: 1.5,
};

export default CubesIcon;
