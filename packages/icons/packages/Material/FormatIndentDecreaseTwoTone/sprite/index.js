/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FormatIndentDecreaseTwoTone.svg');
}

const FormatIndentDecreaseTwoTone = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FormatIndentDecreaseTwoTone"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FormatIndentDecreaseTwoToneHref"
        xlinkHref={`${importPrefix}#FormatIndentDecreaseTwoTone`}
      />
    </svg>
  );
};

FormatIndentDecreaseTwoTone.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FormatIndentDecreaseTwoTone.defaultProps = {
  size: 1.5,
};

export default FormatIndentDecreaseTwoTone;
