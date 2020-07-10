/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandCcDinersClub.svg');
}

const Fa5BrandCcDinersClub = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandCcDinersClub"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandCcDinersClubHref"
        xlinkHref={`${importPrefix}#Fa5BrandCcDinersClub`}
      />
    </svg>
  );
};

Fa5BrandCcDinersClub.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandCcDinersClub.defaultProps = {
  size: 1.5,
};

export default Fa5BrandCcDinersClub;
