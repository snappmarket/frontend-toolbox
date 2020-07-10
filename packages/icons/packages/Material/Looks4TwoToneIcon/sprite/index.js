/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Looks4TwoToneIcon.svg');
}

const Looks4TwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Looks4TwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Looks4TwoToneIconHref"
        xlinkHref={`${importPrefix}#Looks4TwoToneIcon`}
      />
    </svg>
  );
};

Looks4TwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Looks4TwoToneIcon.defaultProps = {
  size: 1.5,
};

export default Looks4TwoToneIcon;
