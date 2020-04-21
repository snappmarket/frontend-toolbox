/**
* THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

import './MapMarkerIcon.svg';

const MapMarkerIcon = ({ className, size }) => 
  <svg 
    viewBox="0 0 800 800"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref="#MapMarkerIcon" />
  </svg>;

MapMarkerIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MapMarkerIcon.defaultProps = {
  size: 1.5,
};

export default MapMarkerIcon;

