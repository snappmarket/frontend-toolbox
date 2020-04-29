/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./EditIcon.svg');
}

let importPrefix = '';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}/sprite.svg`;
}

const EditIcon = ({ className, size }) => (
  <svg
    data-testid="EditIcon"
    viewBox="0 0 15 15.002"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#EditIcon`} />
  </svg>
);

EditIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EditIcon.defaultProps = {
  size: 1.5,
};

export default EditIcon;
