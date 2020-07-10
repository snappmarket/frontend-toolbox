/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Wpbeginner.svg');
}

const Fa4Wpbeginner = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Wpbeginner"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4WpbeginnerHref"
        xlinkHref={`${importPrefix}#Fa4Wpbeginner`}
      />
    </svg>
  );
};

Fa4Wpbeginner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Wpbeginner.defaultProps = {
  size: 1.5,
};

export default Fa4Wpbeginner;
