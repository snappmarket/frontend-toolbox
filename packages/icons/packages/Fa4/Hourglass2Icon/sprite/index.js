/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Hourglass2Icon.svg');
}

const Hourglass2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Hourglass2Icon"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Hourglass2IconHref"
        xlinkHref={`${importPrefix}#Hourglass2Icon`}
      />
    </svg>
  );
};

Hourglass2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Hourglass2Icon.defaultProps = {
  size: 1.5,
};

export default Hourglass2Icon;
