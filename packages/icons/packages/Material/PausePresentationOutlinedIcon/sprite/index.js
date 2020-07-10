/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./PausePresentationOutlinedIcon.svg');
}

const PausePresentationOutlinedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PausePresentationOutlinedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="PausePresentationOutlinedIconHref"
        xlinkHref={`${importPrefix}#PausePresentationOutlinedIcon`}
      />
    </svg>
  );
};

PausePresentationOutlinedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PausePresentationOutlinedIcon.defaultProps = {
  size: 1.5,
};

export default PausePresentationOutlinedIcon;
