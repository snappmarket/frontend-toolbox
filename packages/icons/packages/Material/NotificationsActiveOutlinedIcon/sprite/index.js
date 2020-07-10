/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./NotificationsActiveOutlinedIcon.svg');
}

const NotificationsActiveOutlinedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="NotificationsActiveOutlinedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="NotificationsActiveOutlinedIconHref"
        xlinkHref={`${importPrefix}#NotificationsActiveOutlinedIcon`}
      />
    </svg>
  );
};

NotificationsActiveOutlinedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

NotificationsActiveOutlinedIcon.defaultProps = {
  size: 1.5,
};

export default NotificationsActiveOutlinedIcon;
