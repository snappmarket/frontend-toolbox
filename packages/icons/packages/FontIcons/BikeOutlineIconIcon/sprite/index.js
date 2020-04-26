/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./BikeOutlineIconIcon.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const BikeOutlineIconIcon = ({ className, size }) => 
  <svg 
    data-testid="BikeOutlineIconIcon"
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#BikeOutlineIconIcon`} />
  </svg>;

BikeOutlineIconIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BikeOutlineIconIcon.defaultProps = {
  size: 1.5,
};

export default BikeOutlineIconIcon;

