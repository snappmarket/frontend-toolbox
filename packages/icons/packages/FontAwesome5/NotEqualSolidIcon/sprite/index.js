/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./NotEqualSolidIcon.svg');
}

const NotEqualSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="NotEqualSolidIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="NotEqualSolidIconHref"
        xlinkHref={`${importPrefix}#NotEqualSolidIcon`}
      />
    </svg>
  );
};

NotEqualSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

NotEqualSolidIcon.defaultProps = {
  size: 1.5,
};

export default NotEqualSolidIcon;
