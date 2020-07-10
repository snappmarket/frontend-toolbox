/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Bubbles4Icon.svg');
}

const Bubbles4Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Bubbles4Icon"
      viewBox="0 0 18 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Bubbles4IconHref"
        xlinkHref={`${importPrefix}#Bubbles4Icon`}
      />
    </svg>
  );
};

Bubbles4Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Bubbles4Icon.defaultProps = {
  size: 1.5,
};

export default Bubbles4Icon;
