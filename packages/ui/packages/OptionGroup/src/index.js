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
    <StyledOptionGroup
      className={className}
      data-testid="optionGroup"
      {...rest}
    >
      {options.map(option => (
        <div
          className={`flex-row align-center ${
            option.value === selectedItem ? 'selected' : ''
          } ${option.disabled ? 'disabled' : ''}`}
          key={option.value}
        >
          <StyledOptionItem
            selected={option.value === selectedItem}
            role="radio"
            aria-checked={option.value === selectedItem ? 'true' : 'false'}
            onClick={() => handleSetItem(option)}
            disabled={option.disabled}
            data-testid="optionItem"
          >
            {hasRadio && (
              <CheckBox
                className="circle"
                size={radioSize}
                selected={option.value === selectedItem}
                data-testid="itemRadio"
                {...rest}
              />
            )}
            <span className={hasRadio ? 'pr-1' : ''} data-testid="itemTitle">
              {option.title}
            </span>
          </StyledOptionItem>
          {!!option.meta && <span data-testid="itemMeta">{option.meta}</span>}
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
  onSelectItem: f => f,
};

export default OptionGroup;
