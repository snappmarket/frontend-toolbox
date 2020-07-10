/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./HandPointerSolidIcon.svg');
}

const HandPointerSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="HandPointerSolidIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="HandPointerSolidIconHref"
        xlinkHref={`${importPrefix}#HandPointerSolidIcon`}
      />
    </svg>
  );
};

HandPointerSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

HandPointerSolidIcon.defaultProps = {
  size: 1.5,
};

export default HandPointerSolidIcon;
