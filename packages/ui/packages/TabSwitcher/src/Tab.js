import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import { context as tabSwitcherContext } from './context';

import { StyledTab } from './style';

const Tab = props => {
  const { id, children, onChangeTab, className, ...rest } = props;
  const { changeTab, activeTabId } = useContext(tabSwitcherContext);

  const handleChangeTab = () => {
    changeTab(id);
    onChangeTab(id);
  };

  return (
    <StyledTab
      {...rest}
      className={`${className} ${activeTabId === id ? 'active' : ''}`}
      isActive={activeTabId === id}
      onClick={handleChangeTab}
    >
      {children}
    </StyledTab>
  );
};

Tab.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'outline', 'link']),
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  color: PropTypes.oneOf(['blue', 'red', 'green', 'yellow', 'orange', 'gray']),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  direction: PropTypes.oneOf(['right', 'left']),
  onChangeTab: PropTypes.func,
  onSwitch: PropTypes.func,
};

Tab.defaultProps = {
  size: 'sm',
  type: 'primary',
  color: 'blue',
  icon: false,
  className: '',
  // loading: false,
  direction: 'right',
  onChangeTab: f => f,
};
export default Tab;
