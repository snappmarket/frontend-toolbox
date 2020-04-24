/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./ShareIcon.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const ShareIcon = ({ className, size }) => 
  <svg 
    viewBox="0 0 29 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#ShareIcon`} />
  </svg>;

ShareIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShareIcon.defaultProps = {
  size: 1.5,
};

export default ShareIcon;

