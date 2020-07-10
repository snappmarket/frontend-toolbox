/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./MailOpenOutlineIcon.svg');
}

const MailOpenOutlineIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MailOpenOutlineIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="MailOpenOutlineIconHref"
        xlinkHref={`${importPrefix}#MailOpenOutlineIcon`}
      />
    </svg>
  );
};

MailOpenOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MailOpenOutlineIcon.defaultProps = {
  size: 1.5,
};

export default MailOpenOutlineIcon;
