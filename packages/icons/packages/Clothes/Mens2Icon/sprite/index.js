/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Mens2Icon.svg');
}

const Mens2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Mens2Icon"
      viewBox="0 0 64 64"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Mens2IconHref"
        xlinkHref={`${importPrefix}#Mens2Icon`}
      />
    </svg>
  );
};

Mens2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Mens2Icon.defaultProps = {
  size: 1.5,
};

export default Mens2Icon;
