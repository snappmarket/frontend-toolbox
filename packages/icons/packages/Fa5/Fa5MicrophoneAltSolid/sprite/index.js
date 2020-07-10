/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5MicrophoneAltSolid.svg');
}

const Fa5MicrophoneAltSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5MicrophoneAltSolid"
      viewBox="0 0 352 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5MicrophoneAltSolidHref"
        xlinkHref={`${importPrefix}#Fa5MicrophoneAltSolid`}
      />
    </svg>
  );
};

Fa5MicrophoneAltSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5MicrophoneAltSolid.defaultProps = {
  size: 1.5,
};

export default Fa5MicrophoneAltSolid;
