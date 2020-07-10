/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Mug2Icon.svg');
}

const Mug2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Mug2Icon"
      viewBox="0 0 48 48"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use data-testid="Mug2IconHref" xlinkHref={`${importPrefix}#Mug2Icon`} />
    </svg>
  );
};

Mug2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Mug2Icon.defaultProps = {
  size: 1.5,
};

export default Mug2Icon;
