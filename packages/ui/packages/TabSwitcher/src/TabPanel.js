import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import { context as tabSwitcherContext } from './context';
import { StyledTabPanel } from './style';

const TabPanel = ({ whenActive, children, ...rest }) => {
  const { activeTabId } = useContext(tabSwitcherContext);
  return activeTabId === whenActive ? (
    <StyledTabPanel {...rest}>{children}</StyledTabPanel>
  ) : null;
};

TabPanel.propTypes = {
  whenActive: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  children: PropTypes.node.isRequired,
};

export default TabPanel;
