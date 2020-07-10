/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5UserAltSlashSolid.svg');
}

const Fa5UserAltSlashSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5UserAltSlashSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5UserAltSlashSolidHref"
        xlinkHref={`${importPrefix}#Fa5UserAltSlashSolid`}
      />
    </svg>
  );
};

Fa5UserAltSlashSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5UserAltSlashSolid.defaultProps = {
  size: 1.5,
};

export default Fa5UserAltSlashSolid;
