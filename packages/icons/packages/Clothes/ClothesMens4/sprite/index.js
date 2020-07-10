/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ClothesMens4.svg');
}

const ClothesMens4 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ClothesMens4"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ClothesMens4Href"
        xlinkHref={`${importPrefix}#ClothesMens4`}
      />
    </svg>
  );
};

ClothesMens4.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ClothesMens4.defaultProps = {
  size: 1.5,
};

export default ClothesMens4;
