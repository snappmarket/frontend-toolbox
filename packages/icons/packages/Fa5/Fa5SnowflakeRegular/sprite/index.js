/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5SnowflakeRegular.svg');
}

const Fa5SnowflakeRegular = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5SnowflakeRegular"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5SnowflakeRegularHref"
        xlinkHref={`${importPrefix}#Fa5SnowflakeRegular`}
      />
    </svg>
  );
};

Fa5SnowflakeRegular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5SnowflakeRegular.defaultProps = {
  size: 1.5,
};

export default Fa5SnowflakeRegular;
