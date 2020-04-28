/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./MapMarkerOutlineIcon.svg');
}

let importPrefix = '';
if (process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const MapMarkerOutlineIcon = ({ className, size }) => (
  <svg
    data-testid="MapMarkerOutlineIcon"
    viewBox="0 0 14.6 18.3"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#MapMarkerOutlineIcon`} />
  </svg>
);

MapMarkerOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MapMarkerOutlineIcon.defaultProps = {
  size: 1.5,
};

export default MapMarkerOutlineIcon;
