/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5TransgenderAltSolid.svg');
}

const Fa5TransgenderAltSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5TransgenderAltSolid"
      viewBox="0 0 480 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5TransgenderAltSolidHref"
        xlinkHref={`${importPrefix}#Fa5TransgenderAltSolid`}
      />
    </svg>
  );
};

Fa5TransgenderAltSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5TransgenderAltSolid.defaultProps = {
  size: 1.5,
};

export default Fa5TransgenderAltSolid;
