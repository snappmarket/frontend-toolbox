/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4StarHalfO.svg');
}

const Fa4StarHalfO = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4StarHalfO"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4StarHalfOHref"
        xlinkHref={`${importPrefix}#Fa4StarHalfO`}
      />
    </svg>
  );
};

Fa4StarHalfO.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4StarHalfO.defaultProps = {
  size: 1.5,
};

export default Fa4StarHalfO;
