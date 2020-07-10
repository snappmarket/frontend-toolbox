/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const BallotIcon = ({ className, size }) => (
  <svg
    data-testid="BallotIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"
    ></path>
  </svg>
);

BallotIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BallotIcon.defaultProps = {
  size: 1.5,
};

export default BallotIcon;
