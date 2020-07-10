/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IonPlanetOutline.svg');
}

const IonPlanetOutline = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IonPlanetOutline"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IonPlanetOutlineHref"
        xlinkHref={`${importPrefix}#IonPlanetOutline`}
      />
    </svg>
  );
};

IonPlanetOutline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IonPlanetOutline.defaultProps = {
  size: 1.5,
};

export default IonPlanetOutline;
