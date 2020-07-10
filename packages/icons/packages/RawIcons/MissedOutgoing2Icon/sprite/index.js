/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MissedOutgoing2Icon.svg');
}

const MissedOutgoing2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MissedOutgoing2Icon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MissedOutgoing2IconHref"
        xlinkHref={`${importPrefix}#MissedOutgoing2Icon`}
      />
    </svg>
  );
};

MissedOutgoing2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MissedOutgoing2Icon.defaultProps = {
  size: 1.5,
};

export default MissedOutgoing2Icon;
