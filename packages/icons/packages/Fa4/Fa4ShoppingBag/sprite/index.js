/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4ShoppingBag.svg');
}

const Fa4ShoppingBag = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4ShoppingBag"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4ShoppingBagHref"
        xlinkHref={`${importPrefix}#Fa4ShoppingBag`}
      />
    </svg>
  );
};

Fa4ShoppingBag.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4ShoppingBag.defaultProps = {
  size: 1.5,
};

export default Fa4ShoppingBag;
