## get started
```bash 
npm i @snappmarket/ui-carousel
```


## usage
```js6
import Carousel from 'ui-carousel';

const ProductsSlider = props => {
  const slideConfig = {
    threshold: 50,
    infinite: false,
    nav: true,
    dots: true,
    autoPlay: false,
    rtl: true,
    responsive: {
      0: {
        items: 1.5,
      },
      560: {
        items: 3,
      },
      760: {
        items: 5,
      },
      1200: {
        items: 8,
      },
    },
  };

// for EX:
return (
	<SimpleCarousel className="myCarousel" slideConfig={slideConfig}>
		{products.map(item => (
		  <div>{item}</div>
		))}
	</SimpleCarousel>
)
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