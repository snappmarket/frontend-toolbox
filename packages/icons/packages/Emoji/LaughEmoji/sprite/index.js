/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./LaughEmoji.svg');
}

let importPrefix = '';
if (process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const LaughEmoji = ({ className, size }) => (
  <svg
    data-testid="LaughEmoji"
    viewBox="0 0 43.516 43.516"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#LaughEmoji`} />
  </svg>
);

LaughEmoji.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LaughEmoji.defaultProps = {
  size: 1.5,
};

export default LaughEmoji;
