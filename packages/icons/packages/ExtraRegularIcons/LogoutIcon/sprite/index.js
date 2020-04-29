/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./LogoutIcon.svg');
}

let importPrefix = '/sprite.svg';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}${importPrefix}`;
}

const LogoutIcon = ({ className, size }) => (
  <svg
    data-testid="LogoutIcon"
    viewBox="0 0 32 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#LogoutIcon`} />
  </svg>
);

LogoutIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LogoutIcon.defaultProps = {
  size: 1.5,
};

export default LogoutIcon;
