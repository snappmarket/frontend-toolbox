/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Watermelon2Icon.svg');
}

const Watermelon2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Watermelon2Icon"
      viewBox="0 0 48 48"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Watermelon2IconHref"
        xlinkHref={`${importPrefix}#Watermelon2Icon`}
      />
    </svg>
  );
};

Watermelon2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Watermelon2Icon.defaultProps = {
  size: 1.5,
};

export default Watermelon2Icon;
