/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4BookmarkO.svg');
}

const Fa4BookmarkO = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4BookmarkO"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4BookmarkOHref"
        xlinkHref={`${importPrefix}#Fa4BookmarkO`}
      />
    </svg>
  );
};

Fa4BookmarkO.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4BookmarkO.defaultProps = {
  size: 1.5,
};

export default Fa4BookmarkO;
