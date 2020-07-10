/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./LowPriorityOutlinedIcon.svg');
}

const LowPriorityOutlinedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LowPriorityOutlinedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="LowPriorityOutlinedIconHref"
        xlinkHref={`${importPrefix}#LowPriorityOutlinedIcon`}
      />
    </svg>
  );
};

LowPriorityOutlinedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LowPriorityOutlinedIcon.defaultProps = {
  size: 1.5,
};

export default LowPriorityOutlinedIcon;
