/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./TwitterIcon.svg');
}

let importPrefix = '/sprite.svg';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}${importPrefix}`;
}

const TwitterIcon = ({ className, size }) => (
  <svg
    data-testid="TwitterIcon"
    viewBox="0 0 32 25"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#TwitterIcon`} />
  </svg>
);

TwitterIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

TwitterIcon.defaultProps = {
  size: 1.5,
};

export default TwitterIcon;
