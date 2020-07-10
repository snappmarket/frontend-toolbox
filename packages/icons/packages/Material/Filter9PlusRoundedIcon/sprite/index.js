/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Filter9PlusRoundedIcon.svg');
}

const Filter9PlusRoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Filter9PlusRoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Filter9PlusRoundedIconHref"
        xlinkHref={`${importPrefix}#Filter9PlusRoundedIcon`}
      />
    </svg>
  );
};

Filter9PlusRoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Filter9PlusRoundedIcon.defaultProps = {
  size: 1.5,
};

export default Filter9PlusRoundedIcon;
