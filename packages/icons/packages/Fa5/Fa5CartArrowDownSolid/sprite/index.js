/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5CartArrowDownSolid.svg');
}

const Fa5CartArrowDownSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5CartArrowDownSolid"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5CartArrowDownSolidHref"
        xlinkHref={`${importPrefix}#Fa5CartArrowDownSolid`}
      />
    </svg>
  );
};

Fa5CartArrowDownSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5CartArrowDownSolid.defaultProps = {
  size: 1.5,
};

export default Fa5CartArrowDownSolid;
