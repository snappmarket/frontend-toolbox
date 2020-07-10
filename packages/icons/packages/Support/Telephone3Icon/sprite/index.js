/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Telephone3Icon.svg');
}

const Telephone3Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Telephone3Icon"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Telephone3IconHref"
        xlinkHref={`${importPrefix}#Telephone3Icon`}
      />
    </svg>
  );
};

Telephone3Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Telephone3Icon.defaultProps = {
  size: 1.5,
};

export default Telephone3Icon;
