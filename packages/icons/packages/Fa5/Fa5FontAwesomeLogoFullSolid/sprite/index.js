/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5FontAwesomeLogoFullSolid.svg');
}

const Fa5FontAwesomeLogoFullSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5FontAwesomeLogoFullSolid"
      viewBox="0 0 3992 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5FontAwesomeLogoFullSolidHref"
        xlinkHref={`${importPrefix}#Fa5FontAwesomeLogoFullSolid`}
      />
    </svg>
  );
};

Fa5FontAwesomeLogoFullSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5FontAwesomeLogoFullSolid.defaultProps = {
  size: 1.5,
};

export default Fa5FontAwesomeLogoFullSolid;
