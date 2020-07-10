/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CloudSettingsIcon.svg');
}

const CloudSettingsIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CloudSettingsIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CloudSettingsIconHref"
        xlinkHref={`${importPrefix}#CloudSettingsIcon`}
      />
    </svg>
  );
};

CloudSettingsIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CloudSettingsIcon.defaultProps = {
  size: 1.5,
};

export default CloudSettingsIcon;
