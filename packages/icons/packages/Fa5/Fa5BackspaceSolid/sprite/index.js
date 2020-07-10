/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BackspaceSolid.svg');
}

const Fa5BackspaceSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BackspaceSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BackspaceSolidHref"
        xlinkHref={`${importPrefix}#Fa5BackspaceSolid`}
      />
    </svg>
  );
};

Fa5BackspaceSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BackspaceSolid.defaultProps = {
  size: 1.5,
};

export default Fa5BackspaceSolid;
