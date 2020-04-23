/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./UserAddIcon.svg');
}

const UserAddIcon = ({ className, size }) => 
  <svg 
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`/${process.env.PUBLIC_URL}/sprite.svg#UserAddIcon`} />
  </svg>;

UserAddIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

UserAddIcon.defaultProps = {
  size: 1.5,
};

export default UserAddIcon;
