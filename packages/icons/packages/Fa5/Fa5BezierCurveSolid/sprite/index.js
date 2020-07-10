/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BezierCurveSolid.svg');
}

const Fa5BezierCurveSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BezierCurveSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BezierCurveSolidHref"
        xlinkHref={`${importPrefix}#Fa5BezierCurveSolid`}
      />
    </svg>
  );
};

Fa5BezierCurveSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BezierCurveSolid.defaultProps = {
  size: 1.5,
};

export default Fa5BezierCurveSolid;
