import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import PropTypes from 'prop-types';

import { StyledTextWrap } from './styles';

const TextWrap = ({ className, lines, children }) => {
  const [height, setHeight] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if(textRef.current){
      const lineHeight = window.getComputedStyle(textRef.current).getPropertyValue('line-height');
      setHeight(lines * (lineHeight ? parseInt(lineHeight, 10) : 0));
    }
  }, [textRef.current])

  return <StyledTextWrap
    ref={textRef}
    data-testid="textWrap"
    className={className}
    height={height}
  >
    {children}
  </StyledTextWrap>
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
