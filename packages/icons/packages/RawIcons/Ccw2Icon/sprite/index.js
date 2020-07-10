/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Ccw2Icon.svg');
}

const Ccw2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Ccw2Icon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use data-testid="Ccw2IconHref" xlinkHref={`${importPrefix}#Ccw2Icon`} />
    </svg>
  );
};

Ccw2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Ccw2Icon.defaultProps = {
  size: 1.5,
};

export default Ccw2Icon;
