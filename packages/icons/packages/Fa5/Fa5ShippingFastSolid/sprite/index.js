/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5ShippingFastSolid.svg');
}

const Fa5ShippingFastSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5ShippingFastSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5ShippingFastSolidHref"
        xlinkHref={`${importPrefix}#Fa5ShippingFastSolid`}
      />
    </svg>
  );
};

Fa5ShippingFastSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5ShippingFastSolid.defaultProps = {
  size: 1.5,
};

export default Fa5ShippingFastSolid;
