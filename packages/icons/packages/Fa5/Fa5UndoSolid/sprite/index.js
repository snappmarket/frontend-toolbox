/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5UndoSolid.svg');
}

const Fa5UndoSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5UndoSolid"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5UndoSolidHref"
        xlinkHref={`${importPrefix}#Fa5UndoSolid`}
      />
    </svg>
  );
};

Fa5UndoSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5UndoSolid.defaultProps = {
  size: 1.5,
};

export default Fa5UndoSolid;
