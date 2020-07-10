/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BaseballBallSolidIcon.svg');
}

const BaseballBallSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BaseballBallSolidIcon"
      viewBox="0 0 496 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BaseballBallSolidIconHref"
        xlinkHref={`${importPrefix}#BaseballBallSolidIcon`}
      />
    </svg>
  );
};

BaseballBallSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BaseballBallSolidIcon.defaultProps = {
  size: 1.5,
};

export default BaseballBallSolidIcon;
