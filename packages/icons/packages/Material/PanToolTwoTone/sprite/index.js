/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./PanToolTwoTone.svg');
}

const PanToolTwoTone = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PanToolTwoTone"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="PanToolTwoToneHref"
        xlinkHref={`${importPrefix}#PanToolTwoTone`}
      />
    </svg>
  );
};

PanToolTwoTone.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PanToolTwoTone.defaultProps = {
  size: 1.5,
};

export default PanToolTwoTone;
