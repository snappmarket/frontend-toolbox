/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./YenSignSolidIcon.svg');
}

const YenSignSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="YenSignSolidIcon"
      viewBox="0 0 384 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="YenSignSolidIconHref"
        xlinkHref={`${importPrefix}#YenSignSolidIcon`}
      />
    </svg>
  );
};

YenSignSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

YenSignSolidIcon.defaultProps = {
  size: 1.5,
};

export default YenSignSolidIcon;
