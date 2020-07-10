/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CropSharp = ({ className, size }) => (
  <svg
    data-testid="CropSharp"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M17 15h2V5H9v2h8v8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2H7z"></path>
  </svg>
);

CropSharp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CropSharp.defaultProps = {
  size: 1.5,
};

export default CropSharp;
