/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Telegram.svg');
}

const Fa4Telegram = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Telegram"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4TelegramHref"
        xlinkHref={`${importPrefix}#Fa4Telegram`}
      />
    </svg>
  );
};

Fa4Telegram.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Telegram.defaultProps = {
  size: 1.5,
};

export default Fa4Telegram;
