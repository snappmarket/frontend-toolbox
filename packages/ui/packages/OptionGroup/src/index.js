import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../CheckBox/src';

import { StyledOptionGroup, StyledOptionItem } from './styles';

const OptionGroup = props => {
  const {
    className,
    options,
    hasRadio,
    radioSize,
    selectedItem: initialSelectedItem,
    onSelectItem,
    ...rest
  } = props;
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);
  const handleSetItem = option => {
    if (!option.disabled) {
      setSelectedItem(option.value);
      onSelectItem(option.value);
    }
  };
  useEffect(() => {
    setSelectedItem(initialSelectedItem);
  }, [initialSelectedItem]);
  const render = () => (
    <StyledOptionGroup className={className} {...rest}>
      {options.map(option => (
        <div className="flex-row align-center" key={option.value}>
          <StyledOptionItem
            selected={option.value === selectedItem}
            role="radio"
            aria-checked={option.value === selectedItem ? 'true' : 'false'}
            onClick={() => handleSetItem(option)}
            disabled={option.disabled}
          >
            {hasRadio && (
              <CheckBox
                className="circle"
                size={radioSize}
                selected={option.value === selectedItem}
                {...rest}
              />
            )}
            <span className={hasRadio ? 'pr-1' : ''}>{option.title}</span>
          </StyledOptionItem>
          {!!option.meta && option.meta}
        </div>
      ))}
    </StyledOptionGroup>
  );

  return render();
};

OptionGroup.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  hasRadio: PropTypes.bool,
  radioSize: PropTypes.number,
  selectedItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSelectItem: PropTypes.func,
};
OptionGroup.defaultProps = {
  className: '',
  options: [],
  hasRadio: true,
  radioSize: 1.2,
  selectedItem: '',
  onSelectItem: () => {},
};

export default OptionGroup;
