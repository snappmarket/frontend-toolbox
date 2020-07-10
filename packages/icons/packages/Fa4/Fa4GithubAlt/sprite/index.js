/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4GithubAlt.svg');
}

const Fa4GithubAlt = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4GithubAlt"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4GithubAltHref"
        xlinkHref={`${importPrefix}#Fa4GithubAlt`}
      />
    </svg>
  );
};

Fa4GithubAlt.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4GithubAlt.defaultProps = {
  size: 1.5,
};

export default Fa4GithubAlt;
