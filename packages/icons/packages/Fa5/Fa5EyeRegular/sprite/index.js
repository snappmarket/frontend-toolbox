/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5EyeRegular.svg');
}

const Fa5EyeRegular = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5EyeRegular"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5EyeRegularHref"
        xlinkHref={`${importPrefix}#Fa5EyeRegular`}
      />
    </svg>
  );
};

Fa5EyeRegular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5EyeRegular.defaultProps = {
  size: 1.5,
};

export default Fa5EyeRegular;
