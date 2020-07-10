/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Womans10Icon.svg');
}

const Womans10Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Womans10Icon"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Womans10IconHref"
        xlinkHref={`${importPrefix}#Womans10Icon`}
      />
    </svg>
  );
};

Womans10Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Womans10Icon.defaultProps = {
  size: 1.5,
};

export default Womans10Icon;
