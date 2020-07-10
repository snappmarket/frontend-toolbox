/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./LogoHtml5Icon.svg');
}

const LogoHtml5Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LogoHtml5Icon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="LogoHtml5IconHref"
        xlinkHref={`${importPrefix}#LogoHtml5Icon`}
      />
    </svg>
  );
};

LogoHtml5Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LogoHtml5Icon.defaultProps = {
  size: 1.5,
};

export default LogoHtml5Icon;
