/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4AlignCenter.svg');
}

const Fa4AlignCenter = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4AlignCenter"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4AlignCenterHref"
        xlinkHref={`${importPrefix}#Fa4AlignCenter`}
      />
    </svg>
  );
};

Fa4AlignCenter.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4AlignCenter.defaultProps = {
  size: 1.5,
};

export default Fa4AlignCenter;
