/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SadEmoji.svg');
}

const SadEmoji = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SadEmoji"
      viewBox="0 0 43.77 43.77"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use data-testid="SadEmojiHref" xlinkHref={`${importPrefix}#SadEmoji`} />
    </svg>
  );
};

SadEmoji.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SadEmoji.defaultProps = {
  size: 1.5,
};

export default SadEmoji;
