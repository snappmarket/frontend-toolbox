/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ShapesSharpIcon.svg');
}

const ShapesSharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ShapesSharpIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ShapesSharpIconHref"
        xlinkHref={`${importPrefix}#ShapesSharpIcon`}
      />
    </svg>
  );
};

ShapesSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShapesSharpIcon.defaultProps = {
  size: 1.5,
};

export default ShapesSharpIcon;
