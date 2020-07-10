/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./HdrStrongRounded.svg');
}

const HdrStrongRounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="HdrStrongRounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="HdrStrongRoundedHref"
        xlinkHref={`${importPrefix}#HdrStrongRounded`}
      />
    </svg>
  );
};

HdrStrongRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

HdrStrongRounded.defaultProps = {
  size: 1.5,
};

export default HdrStrongRounded;
