import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import JsonLD from '../index';

describe('Input ui component tests', () => {

  it('Should set id when get id props', () => {
    const schema = {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "name": "JsonLD documentation",
      "description": "this is the page to document the JsonLD component made by snappmarket",
    }
    const { getByTestId } = render(
      <Wrapper>
        <div data-testid="jsonWrapper">
          <JsonLD schema={schema}/>
        </div>
      </Wrapper>,
    );
    expect(getByTestId('jsonWrapper').innerHTML).toEqual(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
  });
});
