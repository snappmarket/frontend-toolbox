/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4WindowMinimize.svg');
}

const Fa4WindowMinimize = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4WindowMinimize"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4WindowMinimizeHref"
        xlinkHref={`${importPrefix}#Fa4WindowMinimize`}
      />
    </svg>
  );
};

Fa4WindowMinimize.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4WindowMinimize.defaultProps = {
  size: 1.5,
};

export default Fa4WindowMinimize;
