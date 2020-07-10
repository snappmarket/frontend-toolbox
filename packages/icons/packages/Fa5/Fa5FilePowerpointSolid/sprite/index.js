/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5FilePowerpointSolid.svg');
}

const Fa5FilePowerpointSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5FilePowerpointSolid"
      viewBox="0 0 384 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5FilePowerpointSolidHref"
        xlinkHref={`${importPrefix}#Fa5FilePowerpointSolid`}
      />
    </svg>
  );
};

Fa5FilePowerpointSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5FilePowerpointSolid.defaultProps = {
  size: 1.5,
};

export default Fa5FilePowerpointSolid;
