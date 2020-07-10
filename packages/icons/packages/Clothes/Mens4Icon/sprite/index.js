/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Mens4Icon.svg');
}

const Mens4Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Mens4Icon"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Mens4IconHref"
        xlinkHref={`${importPrefix}#Mens4Icon`}
      />
    </svg>
  );
};

Mens4Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Mens4Icon.defaultProps = {
  size: 1.5,
};

export default Mens4Icon;
