/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4BellSlashO.svg');
}

const Fa4BellSlashO = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4BellSlashO"
      viewBox="0 0 2048 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4BellSlashOHref"
        xlinkHref={`${importPrefix}#Fa4BellSlashO`}
      />
    </svg>
  );
};

Fa4BellSlashO.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4BellSlashO.defaultProps = {
  size: 1.5,
};

export default Fa4BellSlashO;
