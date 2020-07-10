/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FiberDvrTwoToneIcon.svg');
}

const FiberDvrTwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FiberDvrTwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FiberDvrTwoToneIconHref"
        xlinkHref={`${importPrefix}#FiberDvrTwoToneIcon`}
      />
    </svg>
  );
};

FiberDvrTwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FiberDvrTwoToneIcon.defaultProps = {
  size: 1.5,
};

export default FiberDvrTwoToneIcon;
