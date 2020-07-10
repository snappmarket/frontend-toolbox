/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5FileAudioSolid.svg');
}

const Fa5FileAudioSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5FileAudioSolid"
      viewBox="0 0 384 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5FileAudioSolidHref"
        xlinkHref={`${importPrefix}#Fa5FileAudioSolid`}
      />
    </svg>
  );
};

Fa5FileAudioSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5FileAudioSolid.defaultProps = {
  size: 1.5,
};

export default Fa5FileAudioSolid;
