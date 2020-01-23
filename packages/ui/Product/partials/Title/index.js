import React from 'react';
import PropTypes from 'prop-types';

import TextWrap from 'components/Global/TextWrap';
import { persianNumber } from 'constants/Helpers/numberHelpers';

import { StyledAdditionalComponent, StyledTitleWrapper } from './styles';

const Title = ({ title, additionalComponent, minimal }) => (
  <StyledTitleWrapper className="title-wrapper pr-1">
    {minimal ? (
      <TextWrap lines={2} lineHeight={2}>
        <h4>{persianNumber(title)}</h4>
      </TextWrap>
    ) : (
      <h4>{persianNumber(title)}</h4>
    )}
    {!!additionalComponent && (
      <StyledAdditionalComponent>
        {additionalComponent}
      </StyledAdditionalComponent>
    )}
  </StyledTitleWrapper>
);

Title.propTypes = {
  title: PropTypes.string,
  additionalComponent: PropTypes.node,
  minimal: PropTypes.bool,
};

Title.defaultProps = {
  minimal: false,
};

export default Title;
