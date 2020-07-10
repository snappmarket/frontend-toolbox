/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5MarsStrokeVSolid.svg');
}

const Fa5MarsStrokeVSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5MarsStrokeVSolid"
      viewBox="0 0 288 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5MarsStrokeVSolidHref"
        xlinkHref={`${importPrefix}#Fa5MarsStrokeVSolid`}
      />
    </svg>
  );
};

Fa5MarsStrokeVSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5MarsStrokeVSolid.defaultProps = {
  size: 1.5,
};

export default Fa5MarsStrokeVSolid;
