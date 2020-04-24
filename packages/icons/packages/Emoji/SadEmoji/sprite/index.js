/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./SadEmoji.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const SadEmoji = ({ className, size }) => 
  <svg 
    viewBox="0 0 43.77 43.77"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#SadEmoji`} />
  </svg>;

SadEmoji.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SadEmoji.defaultProps = {
  size: 1.5,
};

export default SadEmoji;

