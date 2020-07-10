/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./LineArrowLeftIcon.svg');
}

const LineArrowLeftIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LineArrowLeftIcon"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="LineArrowLeftIconHref"
        xlinkHref={`${importPrefix}#LineArrowLeftIcon`}
      />
    </svg>
  );
};

LineArrowLeftIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LineArrowLeftIcon.defaultProps = {
  size: 1.5,
};

export default LineArrowLeftIcon;
