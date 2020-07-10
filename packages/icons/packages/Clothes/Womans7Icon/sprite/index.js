/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Womans7Icon.svg');
}

const Womans7Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Womans7Icon"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Womans7IconHref"
        xlinkHref={`${importPrefix}#Womans7Icon`}
      />
    </svg>
  );
};

Womans7Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Womans7Icon.defaultProps = {
  size: 1.5,
};

export default Womans7Icon;
