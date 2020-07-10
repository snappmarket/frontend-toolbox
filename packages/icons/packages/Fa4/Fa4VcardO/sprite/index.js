/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4VcardO.svg');
}

const Fa4VcardO = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4VcardO"
      viewBox="0 0 2048 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4VcardOHref"
        xlinkHref={`${importPrefix}#Fa4VcardO`}
      />
    </svg>
  );
};

Fa4VcardO.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4VcardO.defaultProps = {
  size: 1.5,
};

export default Fa4VcardO;
