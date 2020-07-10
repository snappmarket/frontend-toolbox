/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5RobotSolid.svg');
}

const Fa5RobotSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5RobotSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5RobotSolidHref"
        xlinkHref={`${importPrefix}#Fa5RobotSolid`}
      />
    </svg>
  );
};

Fa5RobotSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5RobotSolid.defaultProps = {
  size: 1.5,
};

export default Fa5RobotSolid;
