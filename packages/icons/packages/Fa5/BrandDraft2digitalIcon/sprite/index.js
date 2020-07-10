/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./BrandDraft2digitalIcon.svg');
}

const BrandDraft2digitalIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BrandDraft2digitalIcon"
      viewBox="0 0 480 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="BrandDraft2digitalIconHref"
        xlinkHref={`${importPrefix}#BrandDraft2digitalIcon`}
      />
    </svg>
  );
};

BrandDraft2digitalIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BrandDraft2digitalIcon.defaultProps = {
  size: 1.5,
};

export default BrandDraft2digitalIcon;
