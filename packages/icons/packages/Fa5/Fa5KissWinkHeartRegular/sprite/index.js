/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5KissWinkHeartRegular.svg');
}

const Fa5KissWinkHeartRegular = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5KissWinkHeartRegular"
      viewBox="0 0 504 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5KissWinkHeartRegularHref"
        xlinkHref={`${importPrefix}#Fa5KissWinkHeartRegular`}
      />
    </svg>
  );
};

Fa5KissWinkHeartRegular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5KissWinkHeartRegular.defaultProps = {
  size: 1.5,
};

export default Fa5KissWinkHeartRegular;
