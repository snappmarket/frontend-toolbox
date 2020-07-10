/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BalanceScaleRightSolid.svg');
}

const Fa5BalanceScaleRightSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BalanceScaleRightSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BalanceScaleRightSolidHref"
        xlinkHref={`${importPrefix}#Fa5BalanceScaleRightSolid`}
      />
    </svg>
  );
};

Fa5BalanceScaleRightSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BalanceScaleRightSolid.defaultProps = {
  size: 1.5,
};

export default Fa5BalanceScaleRightSolid;
