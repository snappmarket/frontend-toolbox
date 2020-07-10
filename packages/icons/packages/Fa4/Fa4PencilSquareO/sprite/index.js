/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4PencilSquareO.svg');
}

const Fa4PencilSquareO = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4PencilSquareO"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4PencilSquareOHref"
        xlinkHref={`${importPrefix}#Fa4PencilSquareO`}
      />
    </svg>
  );
};

Fa4PencilSquareO.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4PencilSquareO.defaultProps = {
  size: 1.5,
};

export default Fa4PencilSquareO;
