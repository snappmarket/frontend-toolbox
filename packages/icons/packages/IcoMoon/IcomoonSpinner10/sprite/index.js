/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonSpinner10.svg');
}

const IcomoonSpinner10 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonSpinner10"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonSpinner10Href"
        xlinkHref={`${importPrefix}#IcomoonSpinner10`}
      />
    </svg>
  );
};

IcomoonSpinner10.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonSpinner10.defaultProps = {
  size: 1.5,
};

export default IcomoonSpinner10;
