/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5UserCogSolid.svg');
}

const Fa5UserCogSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5UserCogSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5UserCogSolidHref"
        xlinkHref={`${importPrefix}#Fa5UserCogSolid`}
      />
    </svg>
  );
};

Fa5UserCogSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5UserCogSolid.defaultProps = {
  size: 1.5,
};

export default Fa5UserCogSolid;
