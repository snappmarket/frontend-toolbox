/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5GlassCheersSolid.svg');
}

const Fa5GlassCheersSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5GlassCheersSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5GlassCheersSolidHref"
        xlinkHref={`${importPrefix}#Fa5GlassCheersSolid`}
      />
    </svg>
  );
};

Fa5GlassCheersSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5GlassCheersSolid.defaultProps = {
  size: 1.5,
};

export default Fa5GlassCheersSolid;
