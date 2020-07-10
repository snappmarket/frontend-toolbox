/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./AcUnitRoundedIcon.svg');
}

const AcUnitRoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="AcUnitRoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="AcUnitRoundedIconHref"
        xlinkHref={`${importPrefix}#AcUnitRoundedIcon`}
      />
    </svg>
  );
};

AcUnitRoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

AcUnitRoundedIcon.defaultProps = {
  size: 1.5,
};

export default AcUnitRoundedIcon;
