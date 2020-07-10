/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./AmericanIcon.svg');
}

const AmericanIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="AmericanIcon"
      viewBox="0 0 48 48"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="AmericanIconHref"
        xlinkHref={`${importPrefix}#AmericanIcon`}
      />
    </svg>
  );
};

AmericanIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

AmericanIcon.defaultProps = {
  size: 1.5,
};

export default AmericanIcon;
