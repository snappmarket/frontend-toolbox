/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Medkit.svg');
}

const Fa4Medkit = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Medkit"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4MedkitHref"
        xlinkHref={`${importPrefix}#Fa4Medkit`}
      />
    </svg>
  );
};

Fa4Medkit.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Medkit.defaultProps = {
  size: 1.5,
};

export default Fa4Medkit;
