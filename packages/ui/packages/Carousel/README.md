## get started
```bash 
npm i @snappmarket/ui-carousel
```


## usage
```es6
import Carousel from 'ui-carousel';

const ProductsSlider = props => {
  const { product, refresh } = props;
  // refresh true or false

  // start from activeSlide position,
  // you can create function for change position by click on showingSlide
  const [activeSlide, setActiveSlide] = useState(0);

  // create config for init Carousel
  const slideConfig = {
    infinite: false,    // infinite Carousel true of false 
    customArrow: true,  // true when use custom icon on arrows
    nav: true,          // true or false showing nav arrows on Carousel
    dots: false,        // true or false showing dots bottom of Carousel
    autoPlay: false,    // true or false auto Carousel auto play
    nextSpeed: 2000,    // auto play speed
    rtl: false,         // true or false rtl mode
    drag: true,         // true or false draggable on Carousel
    threshold: 50,      // set threshold end and first of Carousel for fire actions (drag and calc position ,....)
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
      <Carousel
        slideConfig={slideConfig}
        showingSlide={activeSlide}
        refresh={refresh}
        nextArrow={
          <Button
            icon={<AngleRightIcon />}
            size="xs"
            modifier="link"
            color="gray"
            shade="dark"
          />
        }
        prevArrow={
          <Button
            icon={<AngleLeftIcon />}
            size="xs"
            modifier="link"
            color="gray"
            shade="dark"
          />
        }
      >
      {products.map(item => (
        <div>{item}</div>
      ))}
    </Carousel>
  )
```

you can create custom arrrow icon on Carousel:

first: add true to customArrow on slideConfig
```es6
  const slideConfig = {
    ...
    customArrow: true,
    ...
  };
```
next:
add custom icon DOM or Component for nextArrow,prevArrow on Carousel attribute
```es6
  <Carousel
    ....
    nextArrow={
      <Button
        icon={<AngleRightIcon />}
        size="xs"
        modifier="link"
        color="gray"
        shade="dark"
      />
    }
    prevArrow={
      <Button
        icon={<AngleLeftIcon />}
        size="xs"
        modifier="link"
        color="gray"
        shade="dark"
      />
    }
    ....
  >
  {products.map(item => (
    <div>{item}</div>
  ))}
  </Carousel>
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