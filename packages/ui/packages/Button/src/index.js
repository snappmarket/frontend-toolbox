import * as React from 'react';
import PropTypes from 'prop-types';

import { LoadingSpinner } from '../../Loading/src';

import {
  StyledPrimaryButton,
  StyledOutlineButton,
  StyledLinkButton,
  StyledLabel,
} from './styles';

/* eslint-disable no-nested-ternary */
const Button = props => {
  const {
    modifier,
    size,
    color,
    icon,
    title,
    direction,
    label,
    fullWidth,
    loading,
    role,
    ...rest
  } = props;

  const boxSizing = {
    xs: {
      height: 2.5,
      fontSize: 1.2,
      minWidth: 12,
    },
    sm: {
      height: 3,
      fontSize: 1.4,
      minWidth: 16,
    },
    md: {
      height: 3.5,
      fontSize: 1.4,
      minWidth: 20,
    },
    lg: {
      height: 4.5,
      fontSize: 1.8,
      minWidth: 20.6,
    },
    xl: {
      height: 6,
      fontSize: 1.8,
      minWidth: 30,
    },
  };
  const options = {
    color,
    direction,
    fontSize: boxSizing[size].fontSize,
    height: boxSizing[size].height,
    minWidth: title ? boxSizing[size].minWidth : boxSizing[size].height,
    ...rest,
  };

  if (loading) {
    options.disabled = true;
  }

  const content = (
    <>
      {!!loading && <LoadingSpinner direction={direction} />}
      {!!icon && !loading ? icon : null}
      {!!title && title}
      {!!label && (
        <StyledLabel
          data-testid="buttonLabel"
          className={direction === 'right' ? 'mr-1' : 'ml-1'}
          color={props.color}
        >
          {label}
        </StyledLabel>
      )}
    </>
  );
  const buttons = {
    primary: (
      <StyledPrimaryButton
        data-testid="button"
        fullWidth={fullWidth}
        role={role}
        {...options}
      >
        {content}
      </StyledPrimaryButton>
    ),
    outline: (
      <StyledOutlineButton
        data-testid="button"
        fullWidth={fullWidth}
        role={role}
        {...options}
      >
        {content}
      </StyledOutlineButton>
    ),
    link: (
      <StyledLinkButton data-testid="button" fullWidth={fullWidth} role={role} {...options}>
        {content}
      </StyledLinkButton>
    ),
  };

  return buttons[modifier];
};

Button.propTypes = {
  modifier: PropTypes.oneOf(['primary', 'outline', 'link']),
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  color: PropTypes.oneOf(['blue', 'red', 'green', 'yellow', 'orange', 'gray']),
  shade: PropTypes.oneOf(['dark', 'normal', 'light', 'ultra-light', 'bright']),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
  fullWidth: PropTypes.bool,
  role: PropTypes.string,
  loading: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['right', 'left']),
};

Button.defaultProps = {
  modifier: 'primary',
  size: 'lg',
  color: 'blue',
  shade: 'normal',
  icon: false,
  title: false,
  fullWidth: false,
  className: '',
  loading: false,
  direction: 'right',
  role:'button',
};
export default Button;
