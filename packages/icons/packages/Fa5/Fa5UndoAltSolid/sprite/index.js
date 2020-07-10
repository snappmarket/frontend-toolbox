/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5UndoAltSolid.svg');
}

const Fa5UndoAltSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5UndoAltSolid"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5UndoAltSolidHref"
        xlinkHref={`${importPrefix}#Fa5UndoAltSolid`}
      />
    </svg>
  );
};

Fa5UndoAltSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5UndoAltSolid.defaultProps = {
  size: 1.5,
};

export default Fa5UndoAltSolid;
