let dueDate = new Date().getTime();
const handlePostMessage = ({ key, value }) => {
  const lookup = {
    setDate: () => {
      dueDate = value.getTime();
      // eslint-disable-next-line no-undef
      postMessage({
        key: 'start',
        value: Date.now(),
      });
    },
  }
  if(lookup[key])
    lookup[key]();
}

/**
 * takes the due date from the countdown component
 */
// eslint-disable-next-line no-restricted-globals,no-undef
addEventListener('message', ({data}) => {
  handlePostMessage(data)
})

/**
 * sets an interval to post new remaining time to countdown component
 */
const interval = setInterval(() => {
  const now = Date.now();
  let remaining = dueDate - now;
  if(remaining <= 0) {
    clearInterval(interval)
    remaining = 0;
    // eslint-disable-next-line no-undef
    postMessage({
      key: 'end',
      value: now,
    })
  }
  // eslint-disable-next-line no-undef
  postMessage({
    key: 'countdown',
    value: handleCalculateCountDown(remaining),
  })
}, 1000);

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
