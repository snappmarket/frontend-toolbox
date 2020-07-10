/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5FrownRegular.svg');
}

const Fa5FrownRegular = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5FrownRegular"
      viewBox="0 0 496 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5FrownRegularHref"
        xlinkHref={`${importPrefix}#Fa5FrownRegular`}
      />
    </svg>
  );
};

Fa5FrownRegular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5FrownRegular.defaultProps = {
  size: 1.5,
};

export default Fa5FrownRegular;
