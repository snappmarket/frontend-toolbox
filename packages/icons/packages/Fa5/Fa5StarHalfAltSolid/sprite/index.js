/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5StarHalfAltSolid.svg');
}

const Fa5StarHalfAltSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5StarHalfAltSolid"
      viewBox="0 0 536 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5StarHalfAltSolidHref"
        xlinkHref={`${importPrefix}#Fa5StarHalfAltSolid`}
      />
    </svg>
  );
};

Fa5StarHalfAltSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5StarHalfAltSolid.defaultProps = {
  size: 1.5,
};

export default Fa5StarHalfAltSolid;
