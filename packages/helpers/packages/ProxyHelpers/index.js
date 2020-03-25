/**
 * @function
 * @name onChangeReflector
 * @description
 * returns a proxy wrapper to get target safely,
 * and call onChange callback after defining or deleting any property in created proxy to use in reflector
 * @param object      {object}      object pass through the proxy
 * @param onChange    {function}    callback for any changes in given object
 * @return {boolean|any}
 */
export const onChangeReflector = (object, onChange) => {
  const handler = {
    get(target, property, receiver) {
      try {
        return new Proxy(target[property], handler);
      } catch (err) {
        return Reflect.get(target, property, receiver);
      }
    },
    defineProperty(target, property, descriptor) {
      onChange();
      return Reflect.defineProperty(target, property, descriptor);
    },
    deleteProperty(target, property) {
      onChange();
      return Reflect.deleteProperty(target, property);
    },
  };

  return new Proxy(object, handler);
};
