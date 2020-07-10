/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Social500pxIcon.svg');
}

const Social500pxIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Social500pxIcon"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Social500pxIconHref"
        xlinkHref={`${importPrefix}#Social500pxIcon`}
      />
    </svg>
  );
};

Social500pxIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Social500pxIcon.defaultProps = {
  size: 1.5,
};

export default Social500pxIcon;
