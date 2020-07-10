/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Filter6SharpIcon.svg');
}

const Filter6SharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Filter6SharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Filter6SharpIconHref"
        xlinkHref={`${importPrefix}#Filter6SharpIcon`}
      />
    </svg>
  );
};

Filter6SharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Filter6SharpIcon.defaultProps = {
  size: 1.5,
};

export default Filter6SharpIcon;
