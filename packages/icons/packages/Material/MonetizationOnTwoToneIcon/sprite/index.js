/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MonetizationOnTwoToneIcon.svg');
}

const MonetizationOnTwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MonetizationOnTwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MonetizationOnTwoToneIconHref"
        xlinkHref={`${importPrefix}#MonetizationOnTwoToneIcon`}
      />
    </svg>
  );
};

MonetizationOnTwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MonetizationOnTwoToneIcon.defaultProps = {
  size: 1.5,
};

export default MonetizationOnTwoToneIcon;
