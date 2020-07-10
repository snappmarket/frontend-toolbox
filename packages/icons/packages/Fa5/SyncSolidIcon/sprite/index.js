/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SyncSolidIcon.svg');
}

const SyncSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SyncSolidIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SyncSolidIconHref"
        xlinkHref={`${importPrefix}#SyncSolidIcon`}
      />
    </svg>
  );
};

SyncSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SyncSolidIcon.defaultProps = {
  size: 1.5,
};

export default SyncSolidIcon;
