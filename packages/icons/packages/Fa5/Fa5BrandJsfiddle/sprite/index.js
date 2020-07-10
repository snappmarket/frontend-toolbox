/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandJsfiddle.svg');
}

const Fa5BrandJsfiddle = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandJsfiddle"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandJsfiddleHref"
        xlinkHref={`${importPrefix}#Fa5BrandJsfiddle`}
      />
    </svg>
  );
};

Fa5BrandJsfiddle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandJsfiddle.defaultProps = {
  size: 1.5,
};

export default Fa5BrandJsfiddle;
