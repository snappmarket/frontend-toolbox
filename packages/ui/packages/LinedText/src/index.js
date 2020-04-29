import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledLinedText } from './styles';

const LinedText = props => {
  const { className, children } = props;
  return (
    <StyledLinedText data-testid="linedText" className={className}>
      {children}
    </StyledLinedText>
  );
};

LinedText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default LinedText;
