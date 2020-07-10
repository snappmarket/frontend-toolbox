/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CaretForwardIcon.svg');
}

const CaretForwardIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CaretForwardIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CaretForwardIconHref"
        xlinkHref={`${importPrefix}#CaretForwardIcon`}
      />
    </svg>
  );
};

CaretForwardIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CaretForwardIcon.defaultProps = {
  size: 1.5,
};

export default CaretForwardIcon;
