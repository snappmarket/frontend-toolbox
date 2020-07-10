/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ChevronDownCircleOutlineIcon.svg');
}

const ChevronDownCircleOutlineIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ChevronDownCircleOutlineIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ChevronDownCircleOutlineIconHref"
        xlinkHref={`${importPrefix}#ChevronDownCircleOutlineIcon`}
      />
    </svg>
  );
};

ChevronDownCircleOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ChevronDownCircleOutlineIcon.defaultProps = {
  size: 1.5,
};

export default ChevronDownCircleOutlineIcon;
