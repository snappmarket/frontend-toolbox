/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Brightness3RoundedIcon.svg');
}

const Brightness3RoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Brightness3RoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Brightness3RoundedIconHref"
        xlinkHref={`${importPrefix}#Brightness3RoundedIcon`}
      />
    </svg>
  );
};

Brightness3RoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Brightness3RoundedIcon.defaultProps = {
  size: 1.5,
};

export default Brightness3RoundedIcon;
