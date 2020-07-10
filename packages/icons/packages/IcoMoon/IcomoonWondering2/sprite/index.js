/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonWondering2.svg');
}

const IcomoonWondering2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonWondering2"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonWondering2Href"
        xlinkHref={`${importPrefix}#IcomoonWondering2`}
      />
    </svg>
  );
};

IcomoonWondering2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonWondering2.defaultProps = {
  size: 1.5,
};

export default IcomoonWondering2;
