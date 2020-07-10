/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./VerticalAlignBottomRoundedIcon.svg');
}

const VerticalAlignBottomRoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="VerticalAlignBottomRoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="VerticalAlignBottomRoundedIconHref"
        xlinkHref={`${importPrefix}#VerticalAlignBottomRoundedIcon`}
      />
    </svg>
  );
};

VerticalAlignBottomRoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

VerticalAlignBottomRoundedIcon.defaultProps = {
  size: 1.5,
};

export default VerticalAlignBottomRoundedIcon;
