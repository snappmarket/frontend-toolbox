/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FormatUnderlinedRoundedIcon.svg');
}

const FormatUnderlinedRoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FormatUnderlinedRoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FormatUnderlinedRoundedIconHref"
        xlinkHref={`${importPrefix}#FormatUnderlinedRoundedIcon`}
      />
    </svg>
  );
};

FormatUnderlinedRoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FormatUnderlinedRoundedIcon.defaultProps = {
  size: 1.5,
};

export default FormatUnderlinedRoundedIcon;
