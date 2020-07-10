/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Juice7Icon.svg');
}

const Juice7Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Juice7Icon"
      viewBox="0 0 48 48"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Juice7IconHref"
        xlinkHref={`${importPrefix}#Juice7Icon`}
      />
    </svg>
  );
};

Juice7Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Juice7Icon.defaultProps = {
  size: 1.5,
};

export default Juice7Icon;
