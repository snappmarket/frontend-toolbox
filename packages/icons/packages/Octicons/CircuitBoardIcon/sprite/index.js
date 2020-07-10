/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CircuitBoardIcon.svg');
}

const CircuitBoardIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CircuitBoardIcon"
      viewBox="0 0 14 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CircuitBoardIconHref"
        xlinkHref={`${importPrefix}#CircuitBoardIcon`}
      />
    </svg>
  );
};

CircuitBoardIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CircuitBoardIcon.defaultProps = {
  size: 1.5,
};

export default CircuitBoardIcon;
