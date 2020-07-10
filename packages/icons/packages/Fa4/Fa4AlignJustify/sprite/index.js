/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4AlignJustify.svg');
}

const Fa4AlignJustify = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4AlignJustify"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4AlignJustifyHref"
        xlinkHref={`${importPrefix}#Fa4AlignJustify`}
      />
    </svg>
  );
};

Fa4AlignJustify.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4AlignJustify.defaultProps = {
  size: 1.5,
};

export default Fa4AlignJustify;
