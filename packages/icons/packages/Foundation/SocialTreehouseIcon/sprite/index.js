/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SocialTreehouseIcon.svg');
}

const SocialTreehouseIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SocialTreehouseIcon"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SocialTreehouseIconHref"
        xlinkHref={`${importPrefix}#SocialTreehouseIcon`}
      />
    </svg>
  );
};

SocialTreehouseIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SocialTreehouseIcon.defaultProps = {
  size: 1.5,
};

export default SocialTreehouseIcon;
