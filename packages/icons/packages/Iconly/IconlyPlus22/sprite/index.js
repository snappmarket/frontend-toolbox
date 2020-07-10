/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IconlyPlus22.svg');
}

const IconlyPlus22 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IconlyPlus22"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IconlyPlus22Href"
        xlinkHref={`${importPrefix}#IconlyPlus22`}
      />
    </svg>
  );
};

IconlyPlus22.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconlyPlus22.defaultProps = {
  size: 1.5,
};

export default IconlyPlus22;
