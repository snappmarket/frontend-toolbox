/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Bubbles3Icon.svg');
}

const Bubbles3Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Bubbles3Icon"
      viewBox="0 0 18 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Bubbles3IconHref"
        xlinkHref={`${importPrefix}#Bubbles3Icon`}
      />
    </svg>
  );
};

Bubbles3Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Bubbles3Icon.defaultProps = {
  size: 1.5,
};

export default Bubbles3Icon;
