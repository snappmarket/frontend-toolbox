/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Wrench2Icon.svg');
}

const Wrench2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Wrench2Icon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Wrench2IconHref"
        xlinkHref={`${importPrefix}#Wrench2Icon`}
      />
    </svg>
  );
};

Wrench2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Wrench2Icon.defaultProps = {
  size: 1.5,
};

export default Wrench2Icon;
