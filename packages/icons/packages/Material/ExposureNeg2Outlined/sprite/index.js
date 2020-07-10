/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ExposureNeg2Outlined.svg');
}

const ExposureNeg2Outlined = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ExposureNeg2Outlined"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ExposureNeg2OutlinedHref"
        xlinkHref={`${importPrefix}#ExposureNeg2Outlined`}
      />
    </svg>
  );
};

ExposureNeg2Outlined.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ExposureNeg2Outlined.defaultProps = {
  size: 1.5,
};

export default ExposureNeg2Outlined;
