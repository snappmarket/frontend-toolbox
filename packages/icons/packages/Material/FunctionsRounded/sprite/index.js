/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FunctionsRounded.svg');
}

const FunctionsRounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FunctionsRounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FunctionsRoundedHref"
        xlinkHref={`${importPrefix}#FunctionsRounded`}
      />
    </svg>
  );
};

FunctionsRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FunctionsRounded.defaultProps = {
  size: 1.5,
};

export default FunctionsRounded;
