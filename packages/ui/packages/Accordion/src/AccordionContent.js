import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { context as accordionContext } from './context/accordionContext';
import { StyledAccordionContent } from './style';

const AccordionContent = props => {
  const { whenActive, children, className, ...rest } = props;
  const { activeAccordionId, animate, changeActive } = useContext(
    accordionContext,
  );
  const isActive = activeAccordionId === whenActive;
  const close = () => changeActive('');

  return activeAccordionId === whenActive ? (
    <StyledAccordionContent
      className={`${ isActive && animate ? 'showAnimation' : 'hideAnimation' } ${className}`}
      {...rest}
    >
      {typeof children === 'function' ? children(close) : children}
    </StyledAccordionContent>
  ) : null;
};

AccordionContent.propTypes = {
  whenActive: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
};
AccordionContent.defaultProps = {
  className: '',
};

export default AccordionContent;
