/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./GridIcon.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const GridIcon = ({ className, size }) => 
  <svg 
    data-testid="GridIcon"
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#GridIcon`} />
  </svg>;

GridIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GridIcon.defaultProps = {
  size: 1.5,
};

export default GridIcon;

