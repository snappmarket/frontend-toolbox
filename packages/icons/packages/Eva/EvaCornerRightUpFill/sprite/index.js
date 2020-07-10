/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EvaCornerRightUpFill.svg');
}

const EvaCornerRightUpFill = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EvaCornerRightUpFill"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EvaCornerRightUpFillHref"
        xlinkHref={`${importPrefix}#EvaCornerRightUpFill`}
      />
    </svg>
  );
};

EvaCornerRightUpFill.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EvaCornerRightUpFill.defaultProps = {
  size: 1.5,
};

export default EvaCornerRightUpFill;
