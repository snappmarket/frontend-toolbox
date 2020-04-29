/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./HeartIcon.svg');
}

let importPrefix = '/sprite.svg';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}${importPrefix}`;
}

const HeartIcon = ({ className, size }) => (
  <svg
    data-testid="HeartIcon"
    viewBox="0 0 38 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#HeartIcon`} />
  </svg>
);

HeartIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

HeartIcon.defaultProps = {
  size: 1.5,
};

export default HeartIcon;
