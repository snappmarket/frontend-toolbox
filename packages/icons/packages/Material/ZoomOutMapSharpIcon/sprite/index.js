/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ZoomOutMapSharpIcon.svg');
}

const ZoomOutMapSharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ZoomOutMapSharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ZoomOutMapSharpIconHref"
        xlinkHref={`${importPrefix}#ZoomOutMapSharpIcon`}
      />
    </svg>
  );
};

ZoomOutMapSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ZoomOutMapSharpIcon.defaultProps = {
  size: 1.5,
};

export default ZoomOutMapSharpIcon;
