/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const TrelloIcon = ({ className, size }) => (
  <svg
    data-testid="TrelloIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <rect x="7" y="7" width="3" height="9"></rect>
    <rect x="14" y="7" width="3" height="5"></rect>
  </svg>
);

TrelloIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

TrelloIcon.defaultProps = {
  size: 1.5,
};

export default TrelloIcon;
