/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FiVolumeNone.svg');
}

const FiVolumeNone = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FiVolumeNone"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FiVolumeNoneHref"
        xlinkHref={`${importPrefix}#FiVolumeNone`}
      />
    </svg>
  );
};

FiVolumeNone.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FiVolumeNone.defaultProps = {
  size: 1.5,
};

export default FiVolumeNone;
