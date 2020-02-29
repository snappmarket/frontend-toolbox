import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TabProvider } from './context';
import { StyledTabSwitcher } from './style';

function TabSwitcher({ children, initialTab, ...rest }) {
  const [activeTabId, changeTab] = useState(initialTab);
  useEffect(() => {
    changeTab(initialTab);
  }, [initialTab]);

  return (
    <StyledTabSwitcher {...rest}>
      <TabProvider
        value={{
          activeTabId,
          changeTab,
        }}
      >
        {children}
      </TabProvider>
    </StyledTabSwitcher>
  );
}

TabSwitcher.propTypes = {
  children: PropTypes.node.isRequired,
  initialTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default TabSwitcher;
