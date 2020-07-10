/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5UserTimesSolid.svg');
}

const Fa5UserTimesSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5UserTimesSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5UserTimesSolidHref"
        xlinkHref={`${importPrefix}#Fa5UserTimesSolid`}
      />
    </svg>
  );
};

Fa5UserTimesSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5UserTimesSolid.defaultProps = {
  size: 1.5,
};

export default Fa5UserTimesSolid;
