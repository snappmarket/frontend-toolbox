/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MarkunreadMailbox.svg');
}

const MarkunreadMailbox = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MarkunreadMailbox"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MarkunreadMailboxHref"
        xlinkHref={`${importPrefix}#MarkunreadMailbox`}
      />
    </svg>
  );
};

MarkunreadMailbox.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MarkunreadMailbox.defaultProps = {
  size: 1.5,
};

export default MarkunreadMailbox;
