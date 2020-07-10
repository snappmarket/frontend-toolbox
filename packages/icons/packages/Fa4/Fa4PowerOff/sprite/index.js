/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4PowerOff.svg');
}

const Fa4PowerOff = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4PowerOff"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4PowerOffHref"
        xlinkHref={`${importPrefix}#Fa4PowerOff`}
      />
    </svg>
  );
};

Fa4PowerOff.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4PowerOff.defaultProps = {
  size: 1.5,
};

export default Fa4PowerOff;
