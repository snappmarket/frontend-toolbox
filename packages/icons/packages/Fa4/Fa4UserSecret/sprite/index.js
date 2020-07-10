/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4UserSecret.svg');
}

const Fa4UserSecret = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4UserSecret"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4UserSecretHref"
        xlinkHref={`${importPrefix}#Fa4UserSecret`}
      />
    </svg>
  );
};

Fa4UserSecret.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4UserSecret.defaultProps = {
  size: 1.5,
};

export default Fa4UserSecret;
