/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./BagIcon.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const BagIcon = ({ className, size }) => 
  <svg 
    data-testid="BagIcon"
    viewBox="0 0 14.9 18.7"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#BagIcon`} />
  </svg>;

BagIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BagIcon.defaultProps = {
  size: 1.5,
};

export default BagIcon;

