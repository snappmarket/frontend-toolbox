/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./GeneticsIcon.svg');
}

const GeneticsIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="GeneticsIcon"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="GeneticsIconHref"
        xlinkHref={`${importPrefix}#GeneticsIcon`}
      />
    </svg>
  );
};

GeneticsIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GeneticsIcon.defaultProps = {
  size: 1.5,
};

export default GeneticsIcon;
