/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5LeafSolid.svg');
}

const Fa5LeafSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5LeafSolid"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5LeafSolidHref"
        xlinkHref={`${importPrefix}#Fa5LeafSolid`}
      />
    </svg>
  );
};

Fa5LeafSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5LeafSolid.defaultProps = {
  size: 1.5,
};

export default Fa5LeafSolid;
