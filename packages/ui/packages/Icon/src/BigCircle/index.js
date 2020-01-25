import React from 'react';
import PropTypes from 'prop-types';
import { StyledBigCircle, StyledBigCircleHolder } from './styles';

const BigCircleIcon = (props) => {
  const {
    type, children, className, title,
  } = props;
  return (
    <StyledBigCircleHolder
      type={type}
      className="justify-center flex-column align-center"
    >
      <StyledBigCircle type={type} className={className}>
        {children}
      </StyledBigCircle>
      <h4>{title}</h4>
    </StyledBigCircleHolder>
  );
};

BigCircleIcon.propTypes = {
  type: PropTypes.oneOf(['green', 'red']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default BigCircleIcon;
