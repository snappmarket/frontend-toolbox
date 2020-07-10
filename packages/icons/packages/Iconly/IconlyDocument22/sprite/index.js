/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IconlyDocument22.svg');
}

const IconlyDocument22 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IconlyDocument22"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IconlyDocument22Href"
        xlinkHref={`${importPrefix}#IconlyDocument22`}
      />
    </svg>
  );
};

IconlyDocument22.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconlyDocument22.defaultProps = {
  size: 1.5,
};

export default IconlyDocument22;
