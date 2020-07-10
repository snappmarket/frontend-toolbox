/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./LaughBeamSolidIcon.svg');
}

const LaughBeamSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LaughBeamSolidIcon"
      viewBox="0 0 496 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="LaughBeamSolidIconHref"
        xlinkHref={`${importPrefix}#LaughBeamSolidIcon`}
      />
    </svg>
  );
};

LaughBeamSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LaughBeamSolidIcon.defaultProps = {
  size: 1.5,
};

export default LaughBeamSolidIcon;
