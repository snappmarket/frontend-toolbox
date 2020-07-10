/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonBubbles2.svg');
}

const IcomoonBubbles2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonBubbles2"
      viewBox="0 0 18 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonBubbles2Href"
        xlinkHref={`${importPrefix}#IcomoonBubbles2`}
      />
    </svg>
  );
};

IcomoonBubbles2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonBubbles2.defaultProps = {
  size: 1.5,
};

export default IcomoonBubbles2;
