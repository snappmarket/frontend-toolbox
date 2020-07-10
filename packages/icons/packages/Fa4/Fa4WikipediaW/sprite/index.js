/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4WikipediaW.svg');
}

const Fa4WikipediaW = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4WikipediaW"
      viewBox="0 0 2304 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4WikipediaWHref"
        xlinkHref={`${importPrefix}#Fa4WikipediaW`}
      />
    </svg>
  );
};

Fa4WikipediaW.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4WikipediaW.defaultProps = {
  size: 1.5,
};

export default Fa4WikipediaW;
