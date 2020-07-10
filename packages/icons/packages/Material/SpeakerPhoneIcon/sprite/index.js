/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SpeakerPhoneIcon.svg');
}

const SpeakerPhoneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SpeakerPhoneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SpeakerPhoneIconHref"
        xlinkHref={`${importPrefix}#SpeakerPhoneIcon`}
      />
    </svg>
  );
};

SpeakerPhoneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SpeakerPhoneIcon.defaultProps = {
  size: 1.5,
};

export default SpeakerPhoneIcon;
