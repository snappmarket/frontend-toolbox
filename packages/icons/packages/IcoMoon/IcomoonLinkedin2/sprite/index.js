/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonLinkedin2.svg');
}

const IcomoonLinkedin2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonLinkedin2"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonLinkedin2Href"
        xlinkHref={`${importPrefix}#IcomoonLinkedin2`}
      />
    </svg>
  );
};

IcomoonLinkedin2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonLinkedin2.defaultProps = {
  size: 1.5,
};

export default IcomoonLinkedin2;
