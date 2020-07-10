/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BrandHtml5Icon.svg');
}

const BrandHtml5Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BrandHtml5Icon"
      viewBox="0 0 384 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BrandHtml5IconHref"
        xlinkHref={`${importPrefix}#BrandHtml5Icon`}
      />
    </svg>
  );
};

BrandHtml5Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BrandHtml5Icon.defaultProps = {
  size: 1.5,
};

export default BrandHtml5Icon;
