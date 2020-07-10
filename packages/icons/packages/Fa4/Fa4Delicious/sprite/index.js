/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Delicious.svg');
}

const Fa4Delicious = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Delicious"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4DeliciousHref"
        xlinkHref={`${importPrefix}#Fa4Delicious`}
      />
    </svg>
  );
};

Fa4Delicious.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Delicious.defaultProps = {
  size: 1.5,
};

export default Fa4Delicious;
