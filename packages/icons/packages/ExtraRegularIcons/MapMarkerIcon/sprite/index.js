/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./MapMarkerIcon.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const MapMarkerIcon = ({ className, size }) => 
  <svg 
    viewBox="0 0 800 800"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#MapMarkerIcon`} />
  </svg>;

MapMarkerIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MapMarkerIcon.defaultProps = {
  size: 1.5,
};

export default MapMarkerIcon;

