/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EvaArrowLeftFill.svg');
}

const EvaArrowLeftFill = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EvaArrowLeftFill"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EvaArrowLeftFillHref"
        xlinkHref={`${importPrefix}#EvaArrowLeftFill`}
      />
    </svg>
  );
};

EvaArrowLeftFill.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EvaArrowLeftFill.defaultProps = {
  size: 1.5,
};

export default EvaArrowLeftFill;
