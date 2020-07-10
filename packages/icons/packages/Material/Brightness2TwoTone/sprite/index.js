/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Brightness2TwoTone.svg');
}

const Brightness2TwoTone = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Brightness2TwoTone"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Brightness2TwoToneHref"
        xlinkHref={`${importPrefix}#Brightness2TwoTone`}
      />
    </svg>
  );
};

Brightness2TwoTone.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Brightness2TwoTone.defaultProps = {
  size: 1.5,
};

export default Brightness2TwoTone;
