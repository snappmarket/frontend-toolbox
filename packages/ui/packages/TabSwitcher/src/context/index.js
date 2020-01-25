import { createContext } from 'react';

const context = createContext({});
const { Provider: TabProvider, Consumer: TabConsumer } = context;

export { context, TabConsumer, TabProvider };
