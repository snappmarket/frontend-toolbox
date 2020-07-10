/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./500pxIcon.svg');
}

const 500pxIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if(options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }
  
  return (
    <svg
      data-testid="500pxIcon"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor">
      <use data-testid="500pxIconHref" xlinkHref={`${importPrefix}#500pxIcon`} />
    </svg>
  );
};

500pxIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

500pxIcon.defaultProps = {
  size: 1.5,
};

export default 500pxIcon;

