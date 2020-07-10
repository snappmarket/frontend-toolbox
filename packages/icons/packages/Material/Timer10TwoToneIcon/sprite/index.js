/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Timer10TwoToneIcon.svg');
}

const Timer10TwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Timer10TwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Timer10TwoToneIconHref"
        xlinkHref={`${importPrefix}#Timer10TwoToneIcon`}
      />
    </svg>
  );
};

Timer10TwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Timer10TwoToneIcon.defaultProps = {
  size: 1.5,
};

export default Timer10TwoToneIcon;
