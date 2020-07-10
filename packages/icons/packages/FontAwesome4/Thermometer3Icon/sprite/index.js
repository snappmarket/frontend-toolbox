/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Thermometer3Icon.svg');
}

const Thermometer3Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Thermometer3Icon"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Thermometer3IconHref"
        xlinkHref={`${importPrefix}#Thermometer3Icon`}
      />
    </svg>
  );
};

Thermometer3Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Thermometer3Icon.defaultProps = {
  size: 1.5,
};

export default Thermometer3Icon;
