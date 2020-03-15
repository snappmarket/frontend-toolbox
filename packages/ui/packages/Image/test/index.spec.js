
import * as Image from '../index';

describe('Image', () => {
  it('should add props to Image', () => {
    const wrapper = '<Img />';

    const props = { src: 'https://api.snapp.market/images/test.jpg', loader: 'function' };

    const actual = '<Img src="https://api.snapp.market/images/test.jpg" loader="function" />';

    expect(Image(wrapper, props)).toEqual(actual);
  });
});
