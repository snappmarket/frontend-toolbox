import * as React from 'react';
import {useEffect, useRef} from "react";
import PropTypes from 'prop-types';

import {render} from "react-dom";
import { StyledCountdownWrapper, StyledCountDownItem } from './styles';

const Countdown = ({ date, className, children, onStart, onEnd }) => {
  const countdownRef = useRef();

  /**
   * initiate the countdown with empty value till worker registers
   */
  useEffect(() => {
    const remaining = date - Date.now()
    handleRenderCountdown(remaining > 0 ? remaining :0);
  }, []);
  /**
   * registers the worker when the wrapper has been rendered
   */
  useEffect(() => {
    if(countdownRef.current) {
      onStart(Date.now());
      handleStartCountDown();
    }
  }, [countdownRef.current]);

  const handleStartCountDown = () => {
    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = date - now;
      if(remaining <= 0) {
        clearInterval(interval);
        handleRenderCountdown(0);
        onEnd(now);
      }
      else {
        handleRenderCountdown(remaining);
      }
    }, 1000);
  }

  /**
   * renders the countdown with given or default template without re-rendering the entire component
   */
  const handleRenderCountdown = remaining => {
    const countdown = handleCalculateCountDown(remaining)
    if(countdownRef.current) {
      const template = children(countdown) || handleDefaultTemplate(countdown);
      render(template, countdownRef.current);
    }
  }

  /**
   * calculates the remaining time to the due date
   * @returns {{hours: number, seconds: number, minutes: number, days: number}}
   */
  const handleCalculateCountDown = remaining => {
    const second = 1000;
    const minute = (second * 60);
    const hour = (minute * 60);
    const day = (hour * 24);

    return {
      days: Math.floor(remaining / day),
      hours: Math.floor((remaining % day) / hour),
      minutes: Math.floor((remaining % hour) / minute),
      seconds: Math.floor((remaining % minute) / second),
    }
  }

  /**
   * renders the default template of countdown in jsx
   */
  const handleDefaultTemplate = countdown => (
    <StyledCountdownWrapper data-testid="countdown-wrapper">
      {Object.keys(countdown).map(key => (
        <StyledCountDownItem key={key} data-testid="countdown-item">
          <span>{countdown[key]}</span>
          <small>{key}</small>
        </StyledCountDownItem>
      ))}
    </StyledCountdownWrapper>
  )

  return <div className={className} ref={countdownRef} data-testid="countdown" />;
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
