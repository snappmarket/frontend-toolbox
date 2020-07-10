/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Mens3Icon.svg');
}

const Mens3Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Mens3Icon"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Mens3IconHref"
        xlinkHref={`${importPrefix}#Mens3Icon`}
      />
    </svg>
  );
};

Mens3Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Mens3Icon.defaultProps = {
  size: 1.5,
};

export default Mens3Icon;
