import {addDecorator, configure} from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

const req = require.context('../packages', true, /.story.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

// addDecorator(withInfo);
configure(loadStories, module);
