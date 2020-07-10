/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5CaretUpSolid.svg');
}

const Fa5CaretUpSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5CaretUpSolid"
      viewBox="0 0 320 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5CaretUpSolidHref"
        xlinkHref={`${importPrefix}#Fa5CaretUpSolid`}
      />
    </svg>
  );
};

Fa5CaretUpSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5CaretUpSolid.defaultProps = {
  size: 1.5,
};

export default Fa5CaretUpSolid;
