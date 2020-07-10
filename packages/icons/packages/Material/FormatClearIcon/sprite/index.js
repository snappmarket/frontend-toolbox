/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FormatClearIcon.svg');
}

const FormatClearIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FormatClearIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FormatClearIconHref"
        xlinkHref={`${importPrefix}#FormatClearIcon`}
      />
    </svg>
  );
};

FormatClearIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FormatClearIcon.defaultProps = {
  size: 1.5,
};

export default FormatClearIcon;
