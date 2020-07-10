/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4ArrowUp.svg');
}

const Fa4ArrowUp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4ArrowUp"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4ArrowUpHref"
        xlinkHref={`${importPrefix}#Fa4ArrowUp`}
      />
    </svg>
  );
};

Fa4ArrowUp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4ArrowUp.defaultProps = {
  size: 1.5,
};

export default Fa4ArrowUp;
