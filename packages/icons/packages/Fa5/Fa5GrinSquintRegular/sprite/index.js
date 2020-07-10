/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5GrinSquintRegular.svg');
}

const Fa5GrinSquintRegular = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5GrinSquintRegular"
      viewBox="0 0 496 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5GrinSquintRegularHref"
        xlinkHref={`${importPrefix}#Fa5GrinSquintRegular`}
      />
    </svg>
  );
};

Fa5GrinSquintRegular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5GrinSquintRegular.defaultProps = {
  size: 1.5,
};

export default Fa5GrinSquintRegular;
