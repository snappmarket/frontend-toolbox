/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Retweet.svg');
}

const Fa4Retweet = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Retweet"
      viewBox="0 0 2048 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4RetweetHref"
        xlinkHref={`${importPrefix}#Fa4Retweet`}
      />
    </svg>
  );
};

Fa4Retweet.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Retweet.defaultProps = {
  size: 1.5,
};

export default Fa4Retweet;
