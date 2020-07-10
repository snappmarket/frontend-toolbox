/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FiSocial500px.svg');
}

const FiSocial500px = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FiSocial500px"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FiSocial500pxHref"
        xlinkHref={`${importPrefix}#FiSocial500px`}
      />
    </svg>
  );
};

FiSocial500px.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FiSocial500px.defaultProps = {
  size: 1.5,
};

export default FiSocial500px;
