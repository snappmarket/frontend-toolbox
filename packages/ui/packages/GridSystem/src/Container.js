import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styles';

const Container = props => {
  const { className, children, ...rest } = props;

  return (
    <StyledContainer
      data-testid="gridContainer"
      className={`ft-container ${className}`}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  className: '',
  children: <></>,
};

export default Container;
