/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5FlagUsaSolid.svg');
}

const Fa5FlagUsaSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5FlagUsaSolid"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5FlagUsaSolidHref"
        xlinkHref={`${importPrefix}#Fa5FlagUsaSolid`}
      />
    </svg>
  );
};

Fa5FlagUsaSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5FlagUsaSolid.defaultProps = {
  size: 1.5,
};

export default Fa5FlagUsaSolid;
