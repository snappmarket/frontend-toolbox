/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FeaturedVideoRounded.svg');
}

const FeaturedVideoRounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FeaturedVideoRounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FeaturedVideoRoundedHref"
        xlinkHref={`${importPrefix}#FeaturedVideoRounded`}
      />
    </svg>
  );
};

FeaturedVideoRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeaturedVideoRounded.defaultProps = {
  size: 1.5,
};

export default FeaturedVideoRounded;
