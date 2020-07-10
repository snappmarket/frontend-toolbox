/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5FileDownloadSolid.svg');
}

const Fa5FileDownloadSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5FileDownloadSolid"
      viewBox="0 0 384 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5FileDownloadSolidHref"
        xlinkHref={`${importPrefix}#Fa5FileDownloadSolid`}
      />
    </svg>
  );
};

Fa5FileDownloadSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5FileDownloadSolid.defaultProps = {
  size: 1.5,
};

export default Fa5FileDownloadSolid;
