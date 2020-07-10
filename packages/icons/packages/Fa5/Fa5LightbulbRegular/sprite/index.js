/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5LightbulbRegular.svg');
}

const Fa5LightbulbRegular = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5LightbulbRegular"
      viewBox="0 0 352 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5LightbulbRegularHref"
        xlinkHref={`${importPrefix}#Fa5LightbulbRegular`}
      />
    </svg>
  );
};

Fa5LightbulbRegular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5LightbulbRegular.defaultProps = {
  size: 1.5,
};

export default Fa5LightbulbRegular;
