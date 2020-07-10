/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BedSolid.svg');
}

const Fa5BedSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BedSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BedSolidHref"
        xlinkHref={`${importPrefix}#Fa5BedSolid`}
      />
    </svg>
  );
};

Fa5BedSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BedSolid.defaultProps = {
  size: 1.5,
};

export default Fa5BedSolid;
