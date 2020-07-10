/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IconlyGraph4.svg');
}

const IconlyGraph4 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IconlyGraph4"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IconlyGraph4Href"
        xlinkHref={`${importPrefix}#IconlyGraph4`}
      />
    </svg>
  );
};

IconlyGraph4.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconlyGraph4.defaultProps = {
  size: 1.5,
};

export default IconlyGraph4;
