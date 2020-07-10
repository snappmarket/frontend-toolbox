/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandCcMastercard.svg');
}

const Fa5BrandCcMastercard = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandCcMastercard"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandCcMastercardHref"
        xlinkHref={`${importPrefix}#Fa5BrandCcMastercard`}
      />
    </svg>
  );
};

Fa5BrandCcMastercard.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandCcMastercard.defaultProps = {
  size: 1.5,
};

export default Fa5BrandCcMastercard;
