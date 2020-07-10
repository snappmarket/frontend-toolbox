/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ForwardCircleIcon.svg');
}

const ForwardCircleIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ForwardCircleIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ForwardCircleIconHref"
        xlinkHref={`${importPrefix}#ForwardCircleIcon`}
      />
    </svg>
  );
};

ForwardCircleIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ForwardCircleIcon.defaultProps = {
  size: 1.5,
};

export default ForwardCircleIcon;
