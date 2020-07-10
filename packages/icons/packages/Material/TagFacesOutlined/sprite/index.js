/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./TagFacesOutlined.svg');
}

const TagFacesOutlined = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="TagFacesOutlined"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="TagFacesOutlinedHref"
        xlinkHref={`${importPrefix}#TagFacesOutlined`}
      />
    </svg>
  );
};

TagFacesOutlined.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

TagFacesOutlined.defaultProps = {
  size: 1.5,
};

export default TagFacesOutlined;
