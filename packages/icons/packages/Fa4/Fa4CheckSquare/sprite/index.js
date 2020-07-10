/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4CheckSquare.svg');
}

const Fa4CheckSquare = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4CheckSquare"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4CheckSquareHref"
        xlinkHref={`${importPrefix}#Fa4CheckSquare`}
      />
    </svg>
  );
};

Fa4CheckSquare.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4CheckSquare.defaultProps = {
  size: 1.5,
};

export default Fa4CheckSquare;
