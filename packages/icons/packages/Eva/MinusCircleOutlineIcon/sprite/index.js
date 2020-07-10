/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MinusCircleOutlineIcon.svg');
}

const MinusCircleOutlineIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MinusCircleOutlineIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MinusCircleOutlineIconHref"
        xlinkHref={`${importPrefix}#MinusCircleOutlineIcon`}
      />
    </svg>
  );
};

MinusCircleOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MinusCircleOutlineIcon.defaultProps = {
  size: 1.5,
};

export default MinusCircleOutlineIcon;
