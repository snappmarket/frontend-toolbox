# Inout ui component like bootstrap
----

[![version](https://img.shields.io/npm/v/@snappmarket/ui-input.svg?style=flat-square)](https://www.npmjs.com/package/@snappmarket/ui-input)
[![downloads](https://img.shields.io/npm/dm/@snappmarket/ui-input.svg?style=flat-square)](http://www.npmtrends.com/@snappmarket/ui-input)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT License](https://img.shields.io/npm/l/@snappmarket/ui-input.svg?style=flat-square)](https://github.com/snappmarket/frontend-toolbox/tree/master/packages/useDidUpdateEffect/blob/master/LICENSE.md)

[![Watch on GitHub](https://img.shields.io/github/watchers/snappmarket/frontend-toolbox.svg?style=social)](https://github.com/snappmarket/frontend-toolbox/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/snappmarket/frontend-toolbox.svg?style=social)](https://github.com/snappmarket/frontend-toolbox/stargazers)

## get started
```bash
npm i @snappmarket/ui-integerInput
```


## usage
```javascript
import IntegerInput from '@snappmarket/ui-integerInput';
```

```jsx
  const handleCreditManualChange = inputValue => {
    const { value, message, valid } = inputValue;
    console.log({ value, message, valid })
  };
```

```jsx
  <IntegerInput
    className={`text-center ${inputValid ? 'valid' : 'invalid'}`}
    min={1000}
    max={5000000}
    pattern="^-?[0-9]*$"
    type="tel"
    minMessage="min error message"
    maxMessage="max error message"
    nanMessage="please insert number"
    placeholder="please insert number"
    value={1000}
    onChange={inputValue =>
      handleOnchange(inputValue)
    }
  />
```

---
#### The MIT License (MIT)

Copyright (c) 2020 @snappmarket

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
