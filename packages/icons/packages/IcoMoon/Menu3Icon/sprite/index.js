/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Menu3Icon.svg');
}

const Menu3Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Menu3Icon"
      viewBox="0 0 22 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Menu3IconHref"
        xlinkHref={`${importPrefix}#Menu3Icon`}
      />
    </svg>
  );
};

Menu3Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Menu3Icon.defaultProps = {
  size: 1.5,
};

export default Menu3Icon;
