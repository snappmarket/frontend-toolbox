/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MosqueIcon.svg');
}

const MosqueIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MosqueIcon"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MosqueIconHref"
        xlinkHref={`${importPrefix}#MosqueIcon`}
      />
    </svg>
  );
};

MosqueIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MosqueIcon.defaultProps = {
  size: 1.5,
};

export default MosqueIcon;
