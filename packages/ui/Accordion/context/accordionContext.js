import { createContext } from 'react';

const context = createContext({});
const { Provider: AccordionProvider, Consumer: AccordionConsumer } = context;

export { context, AccordionConsumer, AccordionProvider };
