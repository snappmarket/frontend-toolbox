/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5ArrowAltCircleLeftSolid.svg');
}

const Fa5ArrowAltCircleLeftSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5ArrowAltCircleLeftSolid"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5ArrowAltCircleLeftSolidHref"
        xlinkHref={`${importPrefix}#Fa5ArrowAltCircleLeftSolid`}
      />
    </svg>
  );
};

Fa5ArrowAltCircleLeftSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5ArrowAltCircleLeftSolid.defaultProps = {
  size: 1.5,
};

export default Fa5ArrowAltCircleLeftSolid;
