/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Buysellads.svg');
}

const Fa4Buysellads = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Buysellads"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4BuyselladsHref"
        xlinkHref={`${importPrefix}#Fa4Buysellads`}
      />
    </svg>
  );
};

Fa4Buysellads.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Buysellads.defaultProps = {
  size: 1.5,
};

export default Fa4Buysellads;
