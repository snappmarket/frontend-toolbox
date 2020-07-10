/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./LocalDrinkSharpIcon.svg');
}

const LocalDrinkSharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LocalDrinkSharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="LocalDrinkSharpIconHref"
        xlinkHref={`${importPrefix}#LocalDrinkSharpIcon`}
      />
    </svg>
  );
};

LocalDrinkSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LocalDrinkSharpIcon.defaultProps = {
  size: 1.5,
};

export default LocalDrinkSharpIcon;
