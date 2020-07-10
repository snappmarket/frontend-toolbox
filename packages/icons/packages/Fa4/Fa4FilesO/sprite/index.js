/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4FilesO.svg');
}

const Fa4FilesO = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4FilesO"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4FilesOHref"
        xlinkHref={`${importPrefix}#Fa4FilesO`}
      />
    </svg>
  );
};

Fa4FilesO.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4FilesO.defaultProps = {
  size: 1.5,
};

export default Fa4FilesO;
