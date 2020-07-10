/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FirstPageRounded.svg');
}

const FirstPageRounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FirstPageRounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FirstPageRoundedHref"
        xlinkHref={`${importPrefix}#FirstPageRounded`}
      />
    </svg>
  );
};

FirstPageRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FirstPageRounded.defaultProps = {
  size: 1.5,
};

export default FirstPageRounded;
