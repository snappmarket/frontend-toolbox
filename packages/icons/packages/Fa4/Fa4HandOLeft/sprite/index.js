/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4HandOLeft.svg');
}

const Fa4HandOLeft = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4HandOLeft"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4HandOLeftHref"
        xlinkHref={`${importPrefix}#Fa4HandOLeft`}
      />
    </svg>
  );
};

Fa4HandOLeft.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4HandOLeft.defaultProps = {
  size: 1.5,
};

export default Fa4HandOLeft;
