/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5KiwiBirdSolid.svg');
}

const Fa5KiwiBirdSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5KiwiBirdSolid"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5KiwiBirdSolidHref"
        xlinkHref={`${importPrefix}#Fa5KiwiBirdSolid`}
      />
    </svg>
  );
};

Fa5KiwiBirdSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5KiwiBirdSolid.defaultProps = {
  size: 1.5,
};

export default Fa5KiwiBirdSolid;
