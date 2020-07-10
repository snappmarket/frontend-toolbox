/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Ligature2Icon.svg');
}

const Ligature2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Ligature2Icon"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Ligature2IconHref"
        xlinkHref={`${importPrefix}#Ligature2Icon`}
      />
    </svg>
  );
};

Ligature2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Ligature2Icon.defaultProps = {
  size: 1.5,
};

export default Ligature2Icon;
