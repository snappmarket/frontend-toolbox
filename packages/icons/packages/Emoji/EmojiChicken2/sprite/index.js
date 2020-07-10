/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EmojiChicken2.svg');
}

const EmojiChicken2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EmojiChicken2"
      viewBox="0 0 48 48"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EmojiChicken2Href"
        xlinkHref={`${importPrefix}#EmojiChicken2`}
      />
    </svg>
  );
};

EmojiChicken2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EmojiChicken2.defaultProps = {
  size: 1.5,
};

export default EmojiChicken2;
