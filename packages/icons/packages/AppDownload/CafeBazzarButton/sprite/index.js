/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CafeBazzarButton.svg');
}

const CafeBazzarButton = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CafeBazzarButton"
      viewBox="0 0 182.7 54.8"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CafeBazzarButtonHref"
        xlinkHref={`${importPrefix}#CafeBazzarButton`}
      />
    </svg>
  );
};

CafeBazzarButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CafeBazzarButton.defaultProps = {
  size: 1.5,
};

export default CafeBazzarButton;
