/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MessageTwoToneIcon.svg');
}

const MessageTwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MessageTwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MessageTwoToneIconHref"
        xlinkHref={`${importPrefix}#MessageTwoToneIcon`}
      />
    </svg>
  );
};

MessageTwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MessageTwoToneIcon.defaultProps = {
  size: 1.5,
};

export default MessageTwoToneIcon;
