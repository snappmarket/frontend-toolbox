/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandYoutube.svg');
}

const Fa5BrandYoutube = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandYoutube"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandYoutubeHref"
        xlinkHref={`${importPrefix}#Fa5BrandYoutube`}
      />
    </svg>
  );
};

Fa5BrandYoutube.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandYoutube.defaultProps = {
  size: 1.5,
};

export default Fa5BrandYoutube;
