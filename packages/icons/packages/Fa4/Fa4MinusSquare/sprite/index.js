/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4MinusSquare.svg');
}

const Fa4MinusSquare = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4MinusSquare"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4MinusSquareHref"
        xlinkHref={`${importPrefix}#Fa4MinusSquare`}
      />
    </svg>
  );
};

Fa4MinusSquare.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4MinusSquare.defaultProps = {
  size: 1.5,
};

export default Fa4MinusSquare;
