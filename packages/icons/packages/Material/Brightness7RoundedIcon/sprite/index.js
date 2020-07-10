/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Brightness7RoundedIcon.svg');
}

const Brightness7RoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Brightness7RoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Brightness7RoundedIconHref"
        xlinkHref={`${importPrefix}#Brightness7RoundedIcon`}
      />
    </svg>
  );
};

Brightness7RoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Brightness7RoundedIcon.defaultProps = {
  size: 1.5,
};

export default Brightness7RoundedIcon;
