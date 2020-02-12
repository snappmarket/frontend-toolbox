import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <title>search</title>
    <path d="M13.056 25.443c-6.794 0-12.302-5.508-12.302-12.302s5.508-12.302 12.302-12.302c6.794 0 12.302 5.508 12.302 12.302v0c-0.008 6.791-5.511 12.294-12.301 12.302h-0.001zM13.056 2.886c-5.663 0-10.254 4.591-10.254 10.254s4.591 10.254 10.254 10.254c5.663 0 10.254-4.591 10.254-10.254v0c-0.007-5.661-4.594-10.248-10.253-10.254h-0.001zM30.161 31.069c-0.28-0-0.535-0.113-0.719-0.296l-7.977-7.871c-0.188-0.186-0.305-0.444-0.305-0.729 0-0.566 0.459-1.024 1.024-1.024 0.28 0 0.535 0.113 0.719 0.295l7.977 7.867c0.188 0.186 0.304 0.443 0.304 0.728 0 0.565-0.458 1.024-1.024 1.024h-0z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconName.defaultProps = {
  size: 1.5,
};

export default IconName;
