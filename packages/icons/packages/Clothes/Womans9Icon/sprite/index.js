/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Womans9Icon.svg');
}

const Womans9Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Womans9Icon"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Womans9IconHref"
        xlinkHref={`${importPrefix}#Womans9Icon`}
      />
    </svg>
  );
};

Womans9Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Womans9Icon.defaultProps = {
  size: 1.5,
};

export default Womans9Icon;
