/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./PlaylistAddCheckSharp.svg');
}

const PlaylistAddCheckSharp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PlaylistAddCheckSharp"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="PlaylistAddCheckSharpHref"
        xlinkHref={`${importPrefix}#PlaylistAddCheckSharp`}
      />
    </svg>
  );
};

PlaylistAddCheckSharp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PlaylistAddCheckSharp.defaultProps = {
  size: 1.5,
};

export default PlaylistAddCheckSharp;
