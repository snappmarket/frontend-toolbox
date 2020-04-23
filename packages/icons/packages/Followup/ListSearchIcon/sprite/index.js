/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./ListSearchIcon.svg');
}

const ListSearchIcon = ({ className, size }) => 
  <svg 
    viewBox="0 0 38.453 41.2"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`/${process.env.PUBLIC_URL}/sprite.svg#ListSearchIcon`} />
  </svg>;

ListSearchIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ListSearchIcon.defaultProps = {
  size: 1.5,
};

export default ListSearchIcon;

