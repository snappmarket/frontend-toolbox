/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EvaCheckmarkSquare2Fill.svg');
}

const EvaCheckmarkSquare2Fill = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EvaCheckmarkSquare2Fill"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EvaCheckmarkSquare2FillHref"
        xlinkHref={`${importPrefix}#EvaCheckmarkSquare2Fill`}
      />
    </svg>
  );
};

EvaCheckmarkSquare2Fill.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EvaCheckmarkSquare2Fill.defaultProps = {
  size: 1.5,
};

export default EvaCheckmarkSquare2Fill;
