import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AccordionProvider } from './context/accordionContext';
import { StyledAccordion } from './style';

import { useDidUpdateEffect } from '@snappmarket/hooks';

const Accordion = ({
  children,
  initialAccordion,
  animate,
  onOpen,
  onClose,
  ...rest
}) => {
  const [activeAccordionId, changeActive] = useState(initialAccordion);

  useDidUpdateEffect(() => {
    // we set current tab id to empty string to close
    if (activeAccordionId === '') {
      onOpen();
    } else {
      onClose();
    }
  }, [activeAccordionId]);

  return (
    <StyledAccordion {...rest}>
      <AccordionProvider
        value={{
          activeAccordionId,
          changeActive,
          animate
        }}
      >
        {children}
      </AccordionProvider>
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  children        : PropTypes.node.isRequired,
  initialAccordion: PropTypes.string,
  animate         : PropTypes.bool,
  onOpen          : PropTypes.func,
  onClose         : PropTypes.func
};

Accordion.defaultProps = {
  animate: true,
  onOpen : f => f,
  onClose: f => f
};

export default Accordion;
