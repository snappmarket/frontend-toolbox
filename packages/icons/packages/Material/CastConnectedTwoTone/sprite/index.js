/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CastConnectedTwoTone.svg');
}

const CastConnectedTwoTone = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CastConnectedTwoTone"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CastConnectedTwoToneHref"
        xlinkHref={`${importPrefix}#CastConnectedTwoTone`}
      />
    </svg>
  );
};

CastConnectedTwoTone.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CastConnectedTwoTone.defaultProps = {
  size: 1.5,
};

export default CastConnectedTwoTone;
