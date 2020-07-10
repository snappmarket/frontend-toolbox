/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IndentSolidIcon.svg');
}

const IndentSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IndentSolidIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IndentSolidIconHref"
        xlinkHref={`${importPrefix}#IndentSolidIcon`}
      />
    </svg>
  );
};

IndentSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IndentSolidIcon.defaultProps = {
  size: 1.5,
};

export default IndentSolidIcon;
