/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5HandSpockSolid.svg');
}

const Fa5HandSpockSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5HandSpockSolid"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5HandSpockSolidHref"
        xlinkHref={`${importPrefix}#Fa5HandSpockSolid`}
      />
    </svg>
  );
};

Fa5HandSpockSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5HandSpockSolid.defaultProps = {
  size: 1.5,
};

export default Fa5HandSpockSolid;
