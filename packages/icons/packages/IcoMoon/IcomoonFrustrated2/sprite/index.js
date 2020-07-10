/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonFrustrated2.svg');
}

const IcomoonFrustrated2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonFrustrated2"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonFrustrated2Href"
        xlinkHref={`${importPrefix}#IcomoonFrustrated2`}
      />
    </svg>
  );
};

IcomoonFrustrated2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonFrustrated2.defaultProps = {
  size: 1.5,
};

export default IcomoonFrustrated2;
