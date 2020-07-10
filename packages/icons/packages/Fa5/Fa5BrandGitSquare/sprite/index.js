/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandGitSquare.svg');
}

const Fa5BrandGitSquare = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandGitSquare"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandGitSquareHref"
        xlinkHref={`${importPrefix}#Fa5BrandGitSquare`}
      />
    </svg>
  );
};

Fa5BrandGitSquare.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandGitSquare.defaultProps = {
  size: 1.5,
};

export default Fa5BrandGitSquare;
