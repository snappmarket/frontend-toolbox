/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4VenusMars.svg');
}

const Fa4VenusMars = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4VenusMars"
      viewBox="0 0 2048 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4VenusMarsHref"
        xlinkHref={`${importPrefix}#Fa4VenusMars`}
      />
    </svg>
  );
};

Fa4VenusMars.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4VenusMars.defaultProps = {
  size: 1.5,
};

export default Fa4VenusMars;
