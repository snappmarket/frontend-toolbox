/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Flickr3Icon.svg');
}

const Flickr3Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Flickr3Icon"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Flickr3IconHref"
        xlinkHref={`${importPrefix}#Flickr3Icon`}
      />
    </svg>
  );
};

Flickr3Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Flickr3Icon.defaultProps = {
  size: 1.5,
};

export default Flickr3Icon;
