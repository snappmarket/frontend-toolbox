/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ThumbUpAltSharpIcon.svg');
}

const ThumbUpAltSharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ThumbUpAltSharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ThumbUpAltSharpIconHref"
        xlinkHref={`${importPrefix}#ThumbUpAltSharpIcon`}
      />
    </svg>
  );
};

ThumbUpAltSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ThumbUpAltSharpIcon.defaultProps = {
  size: 1.5,
};

export default ThumbUpAltSharpIcon;
