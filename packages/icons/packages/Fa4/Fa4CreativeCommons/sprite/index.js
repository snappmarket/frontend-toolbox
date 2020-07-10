/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4CreativeCommons.svg');
}

const Fa4CreativeCommons = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4CreativeCommons"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4CreativeCommonsHref"
        xlinkHref={`${importPrefix}#Fa4CreativeCommons`}
      />
    </svg>
  );
};

Fa4CreativeCommons.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4CreativeCommons.defaultProps = {
  size: 1.5,
};

export default Fa4CreativeCommons;
