/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonFileText.svg');
}

const IcomoonFileText = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonFileText"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonFileTextHref"
        xlinkHref={`${importPrefix}#IcomoonFileText`}
      />
    </svg>
  );
};

IcomoonFileText.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonFileText.defaultProps = {
  size: 1.5,
};

export default IcomoonFileText;
