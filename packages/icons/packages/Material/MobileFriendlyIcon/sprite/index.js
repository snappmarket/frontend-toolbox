/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MobileFriendlyIcon.svg');
}

const MobileFriendlyIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MobileFriendlyIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MobileFriendlyIconHref"
        xlinkHref={`${importPrefix}#MobileFriendlyIcon`}
      />
    </svg>
  );
};

MobileFriendlyIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MobileFriendlyIcon.defaultProps = {
  size: 1.5,
};

export default MobileFriendlyIcon;
