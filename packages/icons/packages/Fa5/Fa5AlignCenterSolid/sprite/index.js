/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5AlignCenterSolid.svg');
}

const Fa5AlignCenterSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5AlignCenterSolid"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5AlignCenterSolidHref"
        xlinkHref={`${importPrefix}#Fa5AlignCenterSolid`}
      />
    </svg>
  );
};

Fa5AlignCenterSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5AlignCenterSolid.defaultProps = {
  size: 1.5,
};

export default Fa5AlignCenterSolid;
