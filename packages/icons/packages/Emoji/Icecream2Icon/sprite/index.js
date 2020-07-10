/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Icecream2Icon.svg');
}

const Icecream2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Icecream2Icon"
      viewBox="0 0 48 48"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Icecream2IconHref"
        xlinkHref={`${importPrefix}#Icecream2Icon`}
      />
    </svg>
  );
};

Icecream2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Icecream2Icon.defaultProps = {
  size: 1.5,
};

export default Icecream2Icon;
