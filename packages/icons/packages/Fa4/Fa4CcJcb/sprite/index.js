/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4CcJcb.svg');
}

const Fa4CcJcb = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4CcJcb"
      viewBox="0 0 2304 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use data-testid="Fa4CcJcbHref" xlinkHref={`${importPrefix}#Fa4CcJcb`} />
    </svg>
  );
};

Fa4CcJcb.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4CcJcb.defaultProps = {
  size: 1.5,
};

export default Fa4CcJcb;
