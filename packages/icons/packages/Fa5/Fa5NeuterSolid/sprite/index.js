/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5NeuterSolid.svg');
}

const Fa5NeuterSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5NeuterSolid"
      viewBox="0 0 288 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5NeuterSolidHref"
        xlinkHref={`${importPrefix}#Fa5NeuterSolid`}
      />
    </svg>
  );
};

Fa5NeuterSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5NeuterSolid.defaultProps = {
  size: 1.5,
};

export default Fa5NeuterSolid;
