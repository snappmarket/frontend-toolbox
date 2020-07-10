/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EvaFlip2Outline.svg');
}

const EvaFlip2Outline = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EvaFlip2Outline"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EvaFlip2OutlineHref"
        xlinkHref={`${importPrefix}#EvaFlip2Outline`}
      />
    </svg>
  );
};

EvaFlip2Outline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EvaFlip2Outline.defaultProps = {
  size: 1.5,
};

export default EvaFlip2Outline;
