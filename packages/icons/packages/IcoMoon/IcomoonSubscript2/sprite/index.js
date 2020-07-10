/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonSubscript2.svg');
}

const IcomoonSubscript2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonSubscript2"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonSubscript2Href"
        xlinkHref={`${importPrefix}#IcomoonSubscript2`}
      />
    </svg>
  );
};

IcomoonSubscript2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonSubscript2.defaultProps = {
  size: 1.5,
};

export default IcomoonSubscript2;
