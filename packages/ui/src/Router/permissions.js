/**
 * Here we will add some functions to check permissions
 * @note: this functions should return boolean
 */
export default {
  isLoggedIn(props) {
    return props.isUserLoggedIn;
  },
  hasBasket(props) {
    if (!props.basketProducts) {
      return false;
    }
    return !!Object.keys(props.basketProducts).length;
  },
};
