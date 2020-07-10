/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4FacebookSquare.svg');
}

const Fa4FacebookSquare = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4FacebookSquare"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4FacebookSquareHref"
        xlinkHref={`${importPrefix}#Fa4FacebookSquare`}
      />
    </svg>
  );
};

Fa4FacebookSquare.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4FacebookSquare.defaultProps = {
  size: 1.5,
};

export default Fa4FacebookSquare;
