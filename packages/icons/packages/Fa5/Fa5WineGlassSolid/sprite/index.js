/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5WineGlassSolid.svg');
}

const Fa5WineGlassSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5WineGlassSolid"
      viewBox="0 0 288 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5WineGlassSolidHref"
        xlinkHref={`${importPrefix}#Fa5WineGlassSolid`}
      />
    </svg>
  );
};

Fa5WineGlassSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5WineGlassSolid.defaultProps = {
  size: 1.5,
};

export default Fa5WineGlassSolid;
