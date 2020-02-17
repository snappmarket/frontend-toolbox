import React from 'react';
import PropTypes from 'prop-types';

const NormalEmoji = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42.167"
    height="44"
    viewBox="0 0 42.167 44"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
  >
    <g>
      <path
        d="M35.991 6.444a20.468 20.468 0 0 0-29.816 0 22.682 22.682 0 0 0 0 31.113 20.468 20.468 0 0 0 29.816 0 22.682 22.682 0 0 0 0-31.113zm-.878 30.2a19.266 19.266 0 0 1-27.7-.385 21.367 21.367 0 0 1-.365-28.9 19.267 19.267 0 0 1 27.752.324 21.366 21.366 0 0 1 .316 28.962zm0 0"
        transform="translate(.001)"
        strokeWidth={0}
      />
      <path
        d="M105.56 164.129a.733.733 0 0 0 .9-.517 3.628 3.628 0 0 1 6.287 0 .736.736 0 1 0 1.421-.385 5.04 5.04 0 0 0-9.128 0 .733.733 0 0 0 .519.9zm0 0"
        strokeWidth={0}
        transform="translate(-96.738 -146.707)"
      />
      <path
        d="M313.173 164.129a.733.733 0 0 0 .9-.517 3.628 3.628 0 0 1 6.286 0 .736.736 0 0 0 1.421-.385 5.04 5.04 0 0 0-9.128 0 .733.733 0 0 0 .519.9zm0 0"
        strokeWidth={0}
        transform="translate(-287.985 -146.707)"
      />
      <path
        d="M158.858 335.083h12.269"
        className="no-fill"
        strokeLinecap="round"
        strokeWidth={1.2}
        transform="translate(-143.488 -304.85)"
      />
    </g>
  </svg>
);

NormalEmoji.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

NormalEmoji.defaultProps = {
  size: 1.5,
};

export default NormalEmoji;
