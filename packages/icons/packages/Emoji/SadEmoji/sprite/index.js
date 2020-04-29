/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./SadEmoji.svg');
}

let importPrefix = '/sprite.svg';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}${importPrefix}`;
}

const SadEmoji = ({ className, size }) => (
  <svg
    data-testid="SadEmoji"
    viewBox="0 0 43.77 43.77"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#SadEmoji`} />
  </svg>
);

SadEmoji.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SadEmoji.defaultProps = {
  size: 1.5,
};

export default SadEmoji;
