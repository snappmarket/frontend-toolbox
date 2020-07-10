/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EidQuran2.svg');
}

const EidQuran2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EidQuran2"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EidQuran2Href"
        xlinkHref={`${importPrefix}#EidQuran2`}
      />
    </svg>
  );
};

EidQuran2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EidQuran2.defaultProps = {
  size: 1.5,
};

export default EidQuran2;
