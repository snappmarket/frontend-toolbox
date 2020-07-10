/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Link2FillIcon.svg');
}

const Link2FillIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Link2FillIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Link2FillIconHref"
        xlinkHref={`${importPrefix}#Link2FillIcon`}
      />
    </svg>
  );
};

Link2FillIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Link2FillIcon.defaultProps = {
  size: 1.5,
};

export default Link2FillIcon;
