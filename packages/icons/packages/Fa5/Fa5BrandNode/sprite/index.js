/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandNode.svg');
}

const Fa5BrandNode = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandNode"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandNodeHref"
        xlinkHref={`${importPrefix}#Fa5BrandNode`}
      />
    </svg>
  );
};

Fa5BrandNode.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandNode.defaultProps = {
  size: 1.5,
};

export default Fa5BrandNode;
