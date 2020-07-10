/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5HomeSolid.svg');
}

const Fa5HomeSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5HomeSolid"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5HomeSolidHref"
        xlinkHref={`${importPrefix}#Fa5HomeSolid`}
      />
    </svg>
  );
};

Fa5HomeSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5HomeSolid.defaultProps = {
  size: 1.5,
};

export default Fa5HomeSolid;
