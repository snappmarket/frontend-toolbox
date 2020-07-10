/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Womans8Icon.svg');
}

const Womans8Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Womans8Icon"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Womans8IconHref"
        xlinkHref={`${importPrefix}#Womans8Icon`}
      />
    </svg>
  );
};

Womans8Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Womans8Icon.defaultProps = {
  size: 1.5,
};

export default Womans8Icon;
