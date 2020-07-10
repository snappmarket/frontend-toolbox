/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./DiceD20SolidIcon.svg');
}

const DiceD20SolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="DiceD20SolidIcon"
      viewBox="0 0 480 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="DiceD20SolidIconHref"
        xlinkHref={`${importPrefix}#DiceD20SolidIcon`}
      />
    </svg>
  );
};

DiceD20SolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DiceD20SolidIcon.defaultProps = {
  size: 1.5,
};

export default DiceD20SolidIcon;
