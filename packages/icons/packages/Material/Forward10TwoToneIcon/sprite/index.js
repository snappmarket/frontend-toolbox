/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Forward10TwoToneIcon.svg');
}

const Forward10TwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Forward10TwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Forward10TwoToneIconHref"
        xlinkHref={`${importPrefix}#Forward10TwoToneIcon`}
      />
    </svg>
  );
};

Forward10TwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Forward10TwoToneIcon.defaultProps = {
  size: 1.5,
};

export default Forward10TwoToneIcon;
