/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MailOutlineOutlinedIcon.svg');
}

const MailOutlineOutlinedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MailOutlineOutlinedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MailOutlineOutlinedIconHref"
        xlinkHref={`${importPrefix}#MailOutlineOutlinedIcon`}
      />
    </svg>
  );
};

MailOutlineOutlinedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MailOutlineOutlinedIcon.defaultProps = {
  size: 1.5,
};

export default MailOutlineOutlinedIcon;
