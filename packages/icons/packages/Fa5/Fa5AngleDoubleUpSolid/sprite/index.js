/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5AngleDoubleUpSolid.svg');
}

const Fa5AngleDoubleUpSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5AngleDoubleUpSolid"
      viewBox="0 0 320 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5AngleDoubleUpSolidHref"
        xlinkHref={`${importPrefix}#Fa5AngleDoubleUpSolid`}
      />
    </svg>
  );
};

Fa5AngleDoubleUpSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5AngleDoubleUpSolid.defaultProps = {
  size: 1.5,
};

export default Fa5AngleDoubleUpSolid;
