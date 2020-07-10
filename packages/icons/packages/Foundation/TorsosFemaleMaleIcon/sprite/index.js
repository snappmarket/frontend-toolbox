/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./TorsosFemaleMaleIcon.svg');
}

const TorsosFemaleMaleIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="TorsosFemaleMaleIcon"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="TorsosFemaleMaleIconHref"
        xlinkHref={`${importPrefix}#TorsosFemaleMaleIcon`}
      />
    </svg>
  );
};

TorsosFemaleMaleIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

TorsosFemaleMaleIcon.defaultProps = {
  size: 1.5,
};

export default TorsosFemaleMaleIcon;
