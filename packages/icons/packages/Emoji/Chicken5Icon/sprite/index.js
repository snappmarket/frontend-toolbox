/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Chicken5Icon.svg');
}

const Chicken5Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Chicken5Icon"
      viewBox="0 0 48 48"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Chicken5IconHref"
        xlinkHref={`${importPrefix}#Chicken5Icon`}
      />
    </svg>
  );
};

Chicken5Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Chicken5Icon.defaultProps = {
  size: 1.5,
};

export default Chicken5Icon;
