/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./LocalPhoneTwoTone.svg');
}

const LocalPhoneTwoTone = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LocalPhoneTwoTone"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="LocalPhoneTwoToneHref"
        xlinkHref={`${importPrefix}#LocalPhoneTwoTone`}
      />
    </svg>
  );
};

LocalPhoneTwoTone.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LocalPhoneTwoTone.defaultProps = {
  size: 1.5,
};

export default LocalPhoneTwoTone;
