/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandGitAlt.svg');
}

const Fa5BrandGitAlt = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandGitAlt"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandGitAltHref"
        xlinkHref={`${importPrefix}#Fa5BrandGitAlt`}
      />
    </svg>
  );
};

Fa5BrandGitAlt.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandGitAlt.defaultProps = {
  size: 1.5,
};

export default Fa5BrandGitAlt;
