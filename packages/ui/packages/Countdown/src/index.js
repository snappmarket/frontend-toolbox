import * as React from 'react';
import {useEffect, useRef} from "react";
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import countdownWorker from 'worker-plugin/loader?name=countdownWorker&esModule!./worker';

import {render} from "react-dom";
import { StyledCountdownWrapper, StyledCountDownItem } from './styles';

const Countdown = ({ date, className, children, onStart, onEnd }) => {
  const countdownRef = useRef();

  /**
   * initiate the countdown with empty value till worker registers
   */
  useEffect(() => {
    handleRenderCountdown({
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    });
  }, []);
  /**
   * registers the worker when the wrapper has been rendered
   */
  useEffect(() => {
    if(countdownRef.current) {
      handleRegisterWorker();
    }
  }, [countdownRef.current])

  /**
   * creates an instance of worker from countdownWorker that has been parsed by worker-plugin
   */
  const handleRegisterWorker = () => {
    // eslint-disable-next-line no-undef
    const worker = new Worker(countdownWorker);
    worker.postMessage({ key: 'setDate', value: date });
    worker.onmessage = ({data}) => handlePostMessage(data);
  }

  /**
   *
   */
  const handlePostMessage = ({key, value}) => {
    const lookup = {
      countdown: handleRenderCountdown,
      start: onStart,
      end: onEnd,
    }
    if(lookup[key])
      lookup[key](value)
  }

  /**
   * renders the countdown with given or default template without re-rendering the entire component
   */
  const handleRenderCountdown = countdown => {
    if(countdownRef.current) {
      const template = children(countdown) || handleDefaultTemplate(countdown);
      render(template, countdownRef.current);
    }
  }

  /**
   * renders the default template of countdown in jsx
   */
  const handleDefaultTemplate = countdown => (
    <StyledCountdownWrapper className={className} data-testid="countdown-wrapper">
      {Object.keys(countdown).map(key => (
        <StyledCountDownItem key={key} data-testid="countdown-item">
          <span>{countdown[key]}</span>
          <small>{key}</small>
        </StyledCountDownItem>
      ))}
    </StyledCountdownWrapper>
  )

  return <div ref={countdownRef} />;
};

Countdown.propTypes = {
  date: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.func,
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
};
Countdown.defaultProps = {
  className: '',
  children: () => false,
  onStart: f => f,
  onEnd: f => f,
};

export default Countdown;
