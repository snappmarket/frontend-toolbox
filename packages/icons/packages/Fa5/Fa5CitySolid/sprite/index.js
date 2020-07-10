/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5CitySolid.svg');
}

const Fa5CitySolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5CitySolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5CitySolidHref"
        xlinkHref={`${importPrefix}#Fa5CitySolid`}
      />
    </svg>
  );
};

Fa5CitySolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5CitySolid.defaultProps = {
  size: 1.5,
};

export default Fa5CitySolid;
