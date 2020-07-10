/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Feedback3Icon.svg');
}

const Feedback3Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Feedback3Icon"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Feedback3IconHref"
        xlinkHref={`${importPrefix}#Feedback3Icon`}
      />
    </svg>
  );
};

Feedback3Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Feedback3Icon.defaultProps = {
  size: 1.5,
};

export default Feedback3Icon;
