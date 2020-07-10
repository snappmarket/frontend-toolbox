/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./FolderVideoIcon.svg');
}

const FolderVideoIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="FolderVideoIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="FolderVideoIconHref"
        xlinkHref={`${importPrefix}#FolderVideoIcon`}
      />
    </svg>
  );
};

FolderVideoIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FolderVideoIcon.defaultProps = {
  size: 1.5,
};

export default FolderVideoIcon;
