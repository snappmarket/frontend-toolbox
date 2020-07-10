/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4SortAlphaAsc.svg');
}

const Fa4SortAlphaAsc = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4SortAlphaAsc"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4SortAlphaAscHref"
        xlinkHref={`${importPrefix}#Fa4SortAlphaAsc`}
      />
    </svg>
  );
};

Fa4SortAlphaAsc.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4SortAlphaAsc.defaultProps = {
  size: 1.5,
};

export default Fa4SortAlphaAsc;
