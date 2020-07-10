/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Thermometer0Icon.svg');
}

const Thermometer0Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Thermometer0Icon"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Thermometer0IconHref"
        xlinkHref={`${importPrefix}#Thermometer0Icon`}
      />
    </svg>
  );
};

Thermometer0Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Thermometer0Icon.defaultProps = {
  size: 1.5,
};

export default Thermometer0Icon;
