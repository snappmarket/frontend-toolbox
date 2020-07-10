/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Barcode.svg');
}

const Fa4Barcode = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Barcode"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4BarcodeHref"
        xlinkHref={`${importPrefix}#Fa4Barcode`}
      />
    </svg>
  );
};

Fa4Barcode.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Barcode.defaultProps = {
  size: 1.5,
};

export default Fa4Barcode;
