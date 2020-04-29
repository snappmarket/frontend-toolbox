/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./ArrowDownIcon.svg');
}

let importPrefix = '/sprite.svg';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}${importPrefix}`;
}

const ArrowDownIcon = ({ className, size }) => (
  <svg
    data-testid="ArrowDownIcon"
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#ArrowDownIcon`} />
  </svg>
);

ArrowDownIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ArrowDownIcon.defaultProps = {
  size: 1.5,
};

export default ArrowDownIcon;
