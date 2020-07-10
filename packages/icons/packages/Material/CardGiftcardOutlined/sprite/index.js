/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CardGiftcardOutlined.svg');
}

const CardGiftcardOutlined = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CardGiftcardOutlined"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CardGiftcardOutlinedHref"
        xlinkHref={`${importPrefix}#CardGiftcardOutlined`}
      />
    </svg>
  );
};

CardGiftcardOutlined.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CardGiftcardOutlined.defaultProps = {
  size: 1.5,
};

export default CardGiftcardOutlined;
