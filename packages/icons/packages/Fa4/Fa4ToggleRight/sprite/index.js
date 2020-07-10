/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4ToggleRight.svg');
}

const Fa4ToggleRight = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4ToggleRight"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4ToggleRightHref"
        xlinkHref={`${importPrefix}#Fa4ToggleRight`}
      />
    </svg>
  );
};

Fa4ToggleRight.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4ToggleRight.defaultProps = {
  size: 1.5,
};

export default Fa4ToggleRight;
