import { createContext } from 'react';

const context = createContext({});
const { Provider: ToolboxProvider, Consumer: ToolboxConsumer } = context;

export { context, ToolboxConsumer, ToolboxProvider };
