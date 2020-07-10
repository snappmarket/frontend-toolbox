/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5CannabisSolid.svg');
}

const Fa5CannabisSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5CannabisSolid"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5CannabisSolidHref"
        xlinkHref={`${importPrefix}#Fa5CannabisSolid`}
      />
    </svg>
  );
};

Fa5CannabisSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5CannabisSolid.defaultProps = {
  size: 1.5,
};

export default Fa5CannabisSolid;
