/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Weight1kgIcon.svg');
}

const Weight1kgIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Weight1kgIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Weight1kgIconHref"
        xlinkHref={`${importPrefix}#Weight1kgIcon`}
      />
    </svg>
  );
};

Weight1kgIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Weight1kgIcon.defaultProps = {
  size: 1.5,
};

export default Weight1kgIcon;
