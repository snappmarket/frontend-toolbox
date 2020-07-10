/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Rotate90DegreesCcwOutlinedIcon.svg');
}

const Rotate90DegreesCcwOutlinedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Rotate90DegreesCcwOutlinedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Rotate90DegreesCcwOutlinedIconHref"
        xlinkHref={`${importPrefix}#Rotate90DegreesCcwOutlinedIcon`}
      />
    </svg>
  );
};

Rotate90DegreesCcwOutlinedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Rotate90DegreesCcwOutlinedIcon.defaultProps = {
  size: 1.5,
};

export default Rotate90DegreesCcwOutlinedIcon;
