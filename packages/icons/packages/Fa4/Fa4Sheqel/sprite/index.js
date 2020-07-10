/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Sheqel.svg');
}

const Fa4Sheqel = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Sheqel"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4SheqelHref"
        xlinkHref={`${importPrefix}#Fa4Sheqel`}
      />
    </svg>
  );
};

Fa4Sheqel.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Sheqel.defaultProps = {
  size: 1.5,
};

export default Fa4Sheqel;
