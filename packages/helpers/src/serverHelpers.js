export default {
  forceHydrationFinish: () => {
    window.hydrationFinished = true;
  },
  isHydrationFinish: () =>
    typeof window.hydrationFinished !== 'undefined' && window.hydrationFinished,
};
