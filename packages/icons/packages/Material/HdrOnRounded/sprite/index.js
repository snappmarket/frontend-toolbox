/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./HdrOnRounded.svg');
}

const HdrOnRounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="HdrOnRounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="HdrOnRoundedHref"
        xlinkHref={`${importPrefix}#HdrOnRounded`}
      />
    </svg>
  );
};

HdrOnRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

HdrOnRounded.defaultProps = {
  size: 1.5,
};

export default HdrOnRounded;
