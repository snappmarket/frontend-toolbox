/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ChatbubbleEllipsesIcon.svg');
}

const ChatbubbleEllipsesIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ChatbubbleEllipsesIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ChatbubbleEllipsesIconHref"
        xlinkHref={`${importPrefix}#ChatbubbleEllipsesIcon`}
      />
    </svg>
  );
};

ChatbubbleEllipsesIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ChatbubbleEllipsesIcon.defaultProps = {
  size: 1.5,
};

export default ChatbubbleEllipsesIcon;
