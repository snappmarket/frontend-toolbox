import * as React from 'react';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDidUpdateEffect } from '@snappmarket/hooks';

import { AccordionProvider } from './context/accordionContext';
import { StyledAccordion } from './style';

const Accordion = ({
  children,
  initialAccordion,
  animate,
  onOpen,
  onClose,
  ...rest
}) => {
  const [activeAccordionId, changeActive] = useState(initialAccordion);
  const isOpenedRef = useRef(!!initialAccordion)

  useDidUpdateEffect(() => {
    /**
     * use a flag to call onOpen only one time when accordion actually opened for the first time
     */
    if(!isOpenedRef.current && !!activeAccordionId){
      isOpenedRef.current = true;
      onOpen();
    }
    /**
     *  by clearing the activeAccordionId, it would be closed, so the open flag should be reset to call onOpen next time
     */
    if (activeAccordionId === '') {
      isOpenedRef.current = false;
      onClose();
    }
  }, [activeAccordionId]);

  useDidUpdateEffect(() => {
    /**
     * notify accordion has been triggered from the outside
     */
    changeActive(initialAccordion);
  }, [initialAccordion]);

  return (
    <StyledAccordion {...rest}>
      <AccordionProvider
        value={{
          activeAccordionId,
          changeActive,
          animate,
        }}
      >
        {children}
      </AccordionProvider>
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  initialAccordion: PropTypes.string,
  animate: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

Accordion.defaultProps = {
  animate: true,
  initialAccordion: '',
  onOpen: f => f,
  onClose: f => f,
};

export default Accordion;
