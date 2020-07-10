/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SwimmingWarningIcon.svg');
}

const SwimmingWarningIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SwimmingWarningIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SwimmingWarningIconHref"
        xlinkHref={`${importPrefix}#SwimmingWarningIcon`}
      />
    </svg>
  );
};

SwimmingWarningIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SwimmingWarningIcon.defaultProps = {
  size: 1.5,
};

export default SwimmingWarningIcon;
