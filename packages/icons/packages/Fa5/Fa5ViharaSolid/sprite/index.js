/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5ViharaSolid.svg');
}

const Fa5ViharaSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5ViharaSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5ViharaSolidHref"
        xlinkHref={`${importPrefix}#Fa5ViharaSolid`}
      />
    </svg>
  );
};

Fa5ViharaSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5ViharaSolid.defaultProps = {
  size: 1.5,
};

export default Fa5ViharaSolid;
