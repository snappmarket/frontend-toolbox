/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5JointSolid.svg');
}

const Fa5JointSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5JointSolid"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5JointSolidHref"
        xlinkHref={`${importPrefix}#Fa5JointSolid`}
      />
    </svg>
  );
};

Fa5JointSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5JointSolid.defaultProps = {
  size: 1.5,
};

export default Fa5JointSolid;
