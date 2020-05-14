import * as React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPrimaryLabel,
  StyledMaterialLabel,
  StyledOutlineLabel,
  StyledQuietLabel,
} from './styles';

const Label = props => {
  const { type, children, ...rest } = props;

  const labels = {
    primary: (
      <StyledPrimaryLabel data-testid="label" {...rest}>
        {children}
      </StyledPrimaryLabel>
    ),
    material: (
      <StyledMaterialLabel data-testid="label" {...rest}>
        {children}
      </StyledMaterialLabel>
    ),
    outline: (
      <StyledOutlineLabel data-testid="label" {...rest}>
        {children}
      </StyledOutlineLabel>
    ),
    quiet: (
      <StyledQuietLabel data-testid="label" {...rest}>
        {children}
      </StyledQuietLabel>
    ),
  };

  return labels[type];
};
Label.propTypes = {
  type: PropTypes.oneOf(['primary', 'material', 'outline', 'quiet']),
  color: PropTypes.oneOf(['gray', 'blue', 'red', 'green', 'yellow', 'orange']),
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasBorder: PropTypes.bool,
  fontSize: PropTypes.number,
  className: PropTypes.string,
};

Label.defaultProps = {
  type: 'primary',
  color: 'blue',
  radius: 0,
  hasBorder: true,
  fontSize: 1.2,
  className: '',
};
export default Label;
