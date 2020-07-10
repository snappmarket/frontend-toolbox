/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MustacheIcon.svg');
}

const MustacheIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MustacheIcon"
      viewBox="0 0 20 20"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MustacheIconHref"
        xlinkHref={`${importPrefix}#MustacheIcon`}
      />
    </svg>
  );
};

MustacheIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MustacheIcon.defaultProps = {
  size: 1.5,
};

export default MustacheIcon;
