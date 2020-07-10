/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DeckIcon = ({ className, size }) => (
  <svg
    data-testid="DeckIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <React.Fragment>
      <path d="M22 9L12 2 2 9h9v13h2V9z"></path>
      <path d="M4.14 12l-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"></path>
    </React.Fragment>
    , 'Deck',
  </svg>
);

DeckIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DeckIcon.defaultProps = {
  size: 1.5,
};

export default DeckIcon;
