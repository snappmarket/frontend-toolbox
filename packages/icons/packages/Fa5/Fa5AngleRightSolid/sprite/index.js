/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5AngleRightSolid.svg');
}

const Fa5AngleRightSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5AngleRightSolid"
      viewBox="0 0 256 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5AngleRightSolidHref"
        xlinkHref={`${importPrefix}#Fa5AngleRightSolid`}
      />
    </svg>
  );
};

Fa5AngleRightSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5AngleRightSolid.defaultProps = {
  size: 1.5,
};

export default Fa5AngleRightSolid;
