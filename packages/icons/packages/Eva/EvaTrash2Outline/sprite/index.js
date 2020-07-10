/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EvaTrash2Outline.svg');
}

const EvaTrash2Outline = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EvaTrash2Outline"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EvaTrash2OutlineHref"
        xlinkHref={`${importPrefix}#EvaTrash2Outline`}
      />
    </svg>
  );
};

EvaTrash2Outline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EvaTrash2Outline.defaultProps = {
  size: 1.5,
};

export default EvaTrash2Outline;
