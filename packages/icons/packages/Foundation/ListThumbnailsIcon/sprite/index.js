/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ListThumbnailsIcon.svg');
}

const ListThumbnailsIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ListThumbnailsIcon"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ListThumbnailsIconHref"
        xlinkHref={`${importPrefix}#ListThumbnailsIcon`}
      />
    </svg>
  );
};

ListThumbnailsIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ListThumbnailsIcon.defaultProps = {
  size: 1.5,
};

export default ListThumbnailsIcon;
