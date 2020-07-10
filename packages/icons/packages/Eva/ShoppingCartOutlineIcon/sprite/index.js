/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ShoppingCartOutlineIcon.svg');
}

const ShoppingCartOutlineIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ShoppingCartOutlineIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ShoppingCartOutlineIconHref"
        xlinkHref={`${importPrefix}#ShoppingCartOutlineIcon`}
      />
    </svg>
  );
};

ShoppingCartOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShoppingCartOutlineIcon.defaultProps = {
  size: 1.5,
};

export default ShoppingCartOutlineIcon;
