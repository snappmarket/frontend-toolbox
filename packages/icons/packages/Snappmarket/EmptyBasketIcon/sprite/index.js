/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EmptyBasketIcon.svg');
}

const EmptyBasketIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EmptyBasketIcon"
      viewBox="0 0 588.000000 378.000000"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EmptyBasketIconHref"
        xlinkHref={`${importPrefix}#EmptyBasketIcon`}
      />
    </svg>
  );
};

EmptyBasketIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EmptyBasketIcon.defaultProps = {
  size: 1.5,
};

export default EmptyBasketIcon;
