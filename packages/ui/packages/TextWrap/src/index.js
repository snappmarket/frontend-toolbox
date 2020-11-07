import * as React from 'react';
import {useEffect, useRef} from "react";
import PropTypes from 'prop-types';

import { StyledTextWrap } from './styles';

const TextWrap = ({ className, lines, children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const lineHeight = window.getComputedStyle(textRef.current).getPropertyValue('line-height');
    const height = lines * (lineHeight ? parseInt(lineHeight, 10) : 0);
    textRef.current.style['max-height'] = `${height}px`;
  }, [textRef.current])

  return (
    <StyledTextWrap
      ref={textRef}
      data-testid="textWrap"
      className={className}
    >
      {children}
    </StyledTextWrap>
  )
};

TextWrap.propTypes = {
  className: PropTypes.string,
  lines: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};
TextWrap.defaultProps = {
  className: '',
};

export default TextWrap;
