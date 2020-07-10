/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4HandSpockO.svg');
}

const Fa4HandSpockO = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4HandSpockO"
      viewBox="0 0 2048 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4HandSpockOHref"
        xlinkHref={`${importPrefix}#Fa4HandSpockO`}
      />
    </svg>
  );
};

Fa4HandSpockO.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4HandSpockO.defaultProps = {
  size: 1.5,
};

export default Fa4HandSpockO;
