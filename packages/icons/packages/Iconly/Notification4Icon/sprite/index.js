/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Notification4Icon.svg');
}

const Notification4Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Notification4Icon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Notification4IconHref"
        xlinkHref={`${importPrefix}#Notification4Icon`}
      />
    </svg>
  );
};

Notification4Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Notification4Icon.defaultProps = {
  size: 1.5,
};

export default Notification4Icon;
