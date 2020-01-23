let Js_SourceCode = '';


console.log(require.resolve("./../src/index") );


/**
 * Load local files
 * @type {Promise<Response>}
 */
const Js = fetch('./../src/index').then(code => (Js_SourceCode = code));

/**
 * to make it easy wait until load source codes
 * @type {Promise<Response[]>}
 */
const PromiseAll = Promise.all([Js]).then((values) => {
  console.log(values);
  /**
   * We will write every explanation of our codes right here
   */
  return `
## useDidUpdateEffect 
- this hook will helps us to call a function after component update
- this hook has same API with useEffect hook and there is just simple difference on calling cycle of supplied function


# Source code
~~~js
${values[0]}
~~~
`;

});

export default PromiseAll;
