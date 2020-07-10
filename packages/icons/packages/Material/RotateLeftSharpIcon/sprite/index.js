/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./RotateLeftSharpIcon.svg');
}

const RotateLeftSharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="RotateLeftSharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="RotateLeftSharpIconHref"
        xlinkHref={`${importPrefix}#RotateLeftSharpIcon`}
      />
    </svg>
  );
};

RotateLeftSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

RotateLeftSharpIcon.defaultProps = {
  size: 1.5,
};

export default RotateLeftSharpIcon;
