/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4WindowMaximize.svg');
}

const Fa4WindowMaximize = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4WindowMaximize"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4WindowMaximizeHref"
        xlinkHref={`${importPrefix}#Fa4WindowMaximize`}
      />
    </svg>
  );
};

Fa4WindowMaximize.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4WindowMaximize.defaultProps = {
  size: 1.5,
};

export default Fa4WindowMaximize;
