/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Menu2Icon.svg');
}

const Menu2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Menu2Icon"
      viewBox="0 0 22 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Menu2IconHref"
        xlinkHref={`${importPrefix}#Menu2Icon`}
      />
    </svg>
  );
};

Menu2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Menu2Icon.defaultProps = {
  size: 1.5,
};

export default Menu2Icon;
