/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5PillsSolid.svg');
}

const Fa5PillsSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5PillsSolid"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5PillsSolidHref"
        xlinkHref={`${importPrefix}#Fa5PillsSolid`}
      />
    </svg>
  );
};

Fa5PillsSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5PillsSolid.defaultProps = {
  size: 1.5,
};

export default Fa5PillsSolid;
