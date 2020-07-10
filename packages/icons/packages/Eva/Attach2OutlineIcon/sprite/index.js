/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Attach2OutlineIcon.svg');
}

const Attach2OutlineIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Attach2OutlineIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Attach2OutlineIconHref"
        xlinkHref={`${importPrefix}#Attach2OutlineIcon`}
      />
    </svg>
  );
};

Attach2OutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Attach2OutlineIcon.defaultProps = {
  size: 1.5,
};

export default Attach2OutlineIcon;
