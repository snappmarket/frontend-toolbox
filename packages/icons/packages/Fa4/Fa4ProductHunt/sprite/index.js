/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4ProductHunt.svg');
}

const Fa4ProductHunt = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4ProductHunt"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4ProductHuntHref"
        xlinkHref={`${importPrefix}#Fa4ProductHunt`}
      />
    </svg>
  );
};

Fa4ProductHunt.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4ProductHunt.defaultProps = {
  size: 1.5,
};

export default Fa4ProductHunt;
