/**
* THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

import './ClockIcon.svg';

const ClockIcon = ({ className, size }) => 
  <svg 
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref="#ClockIcon" />
  </svg>;

ClockIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ClockIcon.defaultProps = {
  size: 1.5,
};

export default ClockIcon;

