/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5GrinBeamSweatSolid.svg');
}

const Fa5GrinBeamSweatSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5GrinBeamSweatSolid"
      viewBox="0 0 504 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5GrinBeamSweatSolidHref"
        xlinkHref={`${importPrefix}#Fa5GrinBeamSweatSolid`}
      />
    </svg>
  );
};

Fa5GrinBeamSweatSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5GrinBeamSweatSolid.defaultProps = {
  size: 1.5,
};

export default Fa5GrinBeamSweatSolid;
